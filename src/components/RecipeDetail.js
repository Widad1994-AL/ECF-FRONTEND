import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import "../styles/RecipeDetail.css";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = useSelector((state) =>
    state.recipes.recipes.find((r) => r.id.toString() === id)
  );

  if (!recipe) {
    return <p>Recette introuvable.</p>;
  }

  return (
    <div className="recipe-detail-container">
      <h1>{recipe.title}</h1>
      {recipe.image && <img src={recipe.image} alt={recipe.title} className="detail-image" />}
      <p><strong>Description :</strong> {recipe.description}</p>
      <p><strong>Catégorie :</strong> {recipe.category}</p>
     <p>
        <strong>Ingrédients :</strong>
        {recipe.ingredients} 
      </p>
      <p>
        <strong>Étapes :</strong>
        {recipe.steps} 
      </p>
     
    </div>
  );
}

export default RecipeDetail;
