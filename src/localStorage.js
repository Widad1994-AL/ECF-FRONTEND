// src/localStorage.js

// Fonction pour charger l'état depuis le localStorage
export const loadState = () => {
    try {
      const serializedState = window.localStorage.getItem("state");
      if (!serializedState) {
        return undefined; // Aucune donnée sauvegardée
      }
      return JSON.parse(serializedState);
    } catch (error) {
      console.warn("Erreur lors du chargement du state depuis localStorage :", error);
      return undefined;
    }
  };
  
  // Fonction pour sauvegarder l'état dans le localStorage
  export const saveState = (state) => {
    try {
      // Vérification : On ne sauvegarde que les objets JSON valides
      if (typeof state !== "object" || state === null) {
        console.warn("État non valide, impossible de sauvegarder dans localStorage.");
        return;
      }
      const serializedState = JSON.stringify(state);
      window.localStorage.setItem("state", serializedState);
    } catch (error) {
      console.warn("Erreur lors de la sauvegarde du state dans localStorage :", error);
    }
  };
  
  // Fonction pour supprimer l'état sauvegardé (optionnel)
  export const clearState = () => {
    try {
      window.localStorage.removeItem("state");
    } catch (error) {
      console.warn("Erreur lors de la suppression du state depuis localStorage :", error);
    }
  };
  