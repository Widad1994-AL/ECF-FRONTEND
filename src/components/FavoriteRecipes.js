import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Accès et modification du store Redux
import { toggleFavorite } from "../store/recipeActions"; // Action Redux pour gérer les favoris
import history from "../history"; // Navigation manuelle via historique personnalisé
import "../styles/FavoriteRecipes.css";

function FavoriteRecipes() {
  const dispatch = useDispatch(); // Permet d’envoyer des actions au store Redux
  const recipes = useSelector((state) => state.recipes.recipes); // Récupère la liste des recettes depuis le state
  const favorites = recipes.filter((r) => r.isFavorite); // Filtre les recettes marquées comme favorites

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id)); // Toggle "favori" sur une recette donnée
  };

  return (
    <div className="favorites-container">
      <h1>💖 Mes Recettes Préférées</h1>
      {favorites.length === 0 ? (
        <p className="no-favorites">Aucune recette ajoutée en favoris.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((recipe) => (
            <div key={recipe.id} className="favorite-card">
              <div
                className="favorite-card-image"
                style={{ backgroundImage: `url(${recipe.image})` }}
              />
              <div className="favorite-card-content">
                <h2
                  className="recipe-title"
                  onClick={() => history.push(`/recipe/${recipe.id}`)} // Navigation vers le détail de la recette
                >
                  {recipe.title}
                </h2>
                <p className="recipe-description">{recipe.description}</p>
                <div className="card-footer">
                  <button
                    className="favorite-btn"
                    onClick={() => handleToggleFavorite(recipe.id)}
                  >
                    ❤️ Retirer
                  </button>
                  <span className="category-tag">{recipe.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoriteRecipes;
