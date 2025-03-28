import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import recipeReducer from "./store/recipeReducer";
import { loadState, saveState } from "./localStorage";
import "./styles/app.css";

// Charger l'état sauvegardé depuis localStorage
const persistedState = loadState();

const rootReducer = combineReducers({
  recipes: recipeReducer,
});

// Création du store avec l'état persistant
const store = createStore(rootReducer, persistedState);

// Sauvegarder l'état dans localStorage à chaque modification
store.subscribe(() => {
  saveState({
    recipes: store.getState().recipes,
  });
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
