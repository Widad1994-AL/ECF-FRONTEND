import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; // Accès et mise à jour du store Redux
import { useParams } from "react-router"; // Récupération des paramètres d'URL (ex: catégorie)
import history from "../history"; // Pour naviguer manuellement
import { toggleFavorite } from "../store/recipeActions"; // Action Redux pour favoris
import "../styles/RecipeList.css";

function RecipeList() {
  const dispatch = useDispatch();
  const { category } = useParams(); // Récupère la catégorie depuis l’URL
  const recipes = useSelector((state) => state.recipes.recipes); // Récupère les recettes depuis le store

  const [searchTerm, setSearchTerm] = useState(""); // Terme saisi dans la barre de recherche
  const [filteredRecipes, setFilteredRecipes] = useState([]); // Résultat filtré à afficher
  const [suggestions, setSuggestions] = useState([]); // Suggestions automatiques

  useEffect(() => {
    let filtered = recipes;

    if (category) {
      filtered = filtered.filter((recipe) => recipe.category === category); // Filtrage par catégorie
    }

    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(lower) ||
          recipe.description.toLowerCase().includes(lower)
      );

      // Génération de suggestions à partir des titres
      const titles = recipes.map((r) => r.title);
      const matches = titles.filter((title) =>
        title.toLowerCase().startsWith(lower)
      );
      setSuggestions(matches.slice(0, 5)); // Max 5 suggestions
    } else {
      setSuggestions([]); // Aucune suggestion si champ vide
    }

    setFilteredRecipes(filtered); // Met à jour la liste visible
  }, [searchTerm, category, recipes]);

  // Ajout/retrait d'une recette dans les favoris
  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  // Clique sur une suggestion => mise à jour du champ + masquage des suggestions
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="recipe-list-container">
      <div className="user-profile">
        <h2>👨‍🍳 Mon Profil</h2>
        <p><strong>Nom :</strong> Jean Dupont</p>
        <p><strong>Email :</strong> jean.dupont@email.com</p>
        <p><strong>Recettes publiées :</strong> {recipes.length}</p>
      </div>

      <h1>Nos Recettes</h1>

      {/* Barre de recherche avec suggestions */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Rechercher une recette..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((s, idx) => (
              <li key={idx} onClick={() => handleSuggestionClick(s)}>
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Affichage des recettes filtrées */}
      <div className="recipe-cards">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <div
                className="recipe-card-image"
                style={{ backgroundImage: `url(${recipe.image})` }}
              ></div>
              <div className="recipe-card-body">
                {/* Clic sur le titre = aller à la page détail */}
                <h2
                  className="recipe-title"
                  onClick={() => history.push(`/recipe/${recipe.id}`)}
                >
                  {recipe.title}
                </h2>
                <p className="recipe-description">{recipe.description}</p>
                <div className="recipe-footer">
                  {/* Bouton favoris (♥) */}
                  <button
                    onClick={() => handleToggleFavorite(recipe.id)}
                    className={`icon-heart ${recipe.isFavorite ? "active" : ""}`}
                  >
                    ♥
                  </button>
                  <span className="category-tag">{recipe.category}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Aucune recette trouvée.</p>
        )}
      </div>
    </div>
  );
}

export default RecipeList;
