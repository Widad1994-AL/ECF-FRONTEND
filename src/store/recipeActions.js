export const FETCH_RECIPES = "FETCH_RECIPES";
export const ADD_RECIPE = "ADD_RECIPE";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

// (Optionnel) Action pour rafraîchir les recettes – ici non utilisée pour l'ajout
export const fetchRecipes = (category) => {
  return {
    type: FETCH_RECIPES,
    payload: null,
  };
};

// Action pour ajouter une recette
export const addRecipe = (recipe) => ({
  type: ADD_RECIPE,
  payload: recipe,
});

// Action pour basculer le statut favori d'une recette
export const toggleFavorite = (id) => ({
  type: TOGGLE_FAVORITE,
  payload: id,
});
