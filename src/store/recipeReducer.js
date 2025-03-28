import { FETCH_RECIPES, ADD_RECIPE, TOGGLE_FAVORITE } from "./recipeActions";

const initialRecipes = [
  {
    id: 1,
    title: "Avocado Toast",
    description: "Tartine d'avocat fraîche et crémeuse.",
    category: "entrees",
    image: require("../assets/Avocado-Toast-min.jpg"),
    ingredients: ["Pain", "Avocat", "Tomate", "Citron"],
    steps: ["Griller le pain", "Écraser l'avocat", "Garnir de légumes"],
    isFavorite: false,
  },
  {
    id: 2,
    title: "Cake au potimarron",
    description: "Moelleux au potimarron et graines.",
    category: "plats",
    image: require("../assets/cake.webp"),
    ingredients: ["Potimarron", "Farine", "Feta"],
    steps: ["Mélanger", "Cuire 45 min"],
    isFavorite: false,
  },
  {
    id: 3,
    title: "Quiche aux champignons",
    description: "Sans pâte, légère et gourmande.",
    category: "plats",
    image: require("../assets/Quiche-sans-pate-champignon-1-1-768x1152.webp"),
    ingredients: ["Champignons", "Œufs", "Crème"],
    steps: ["Mélanger", "Cuire 30 min"],
    isFavorite: false,
  },
  {
    id: 4,
    title: "Mugcake myrtille",
    description: "cake moelleuse et délicieux.",
    category: "desserts",
    image: require("../assets/Mugcake-myrtille.webp"),
    ingredients: ["Farine", "oeufs", "myrtilles"],
    steps: ["Mélanger", "Cuire 30 min"],
    isFavorite: false,
  }

];


const initialState = {
  recipes: initialRecipes,
};


const recipeReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_RECIPES:
      // Ici, on ne modifie pas le store car on utilise directement le state partagé
      return state;
    case ADD_RECIPE: {
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };
    }

    case TOGGLE_FAVORITE:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe.id === action.payload
            ? { ...recipe, isFavorite: !recipe.isFavorite }
            : recipe
        ),
      };
    default:
      return state;
  }
};

export default recipeReducer;
