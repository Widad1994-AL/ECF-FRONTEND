# 🍽️ React Recipe App

Une application de gestion de recettes de cuisine moderne, développée avec **React**, **Redux** et **React Router**. Elle permet d'ajouter, consulter, modifier et mettre en favoris des recettes personnalisées.

---

## 🚀 Installation et Lancement

### ✅ Prérequis

- Node.js (v16 ou supérieur)
- npm ou yarn

### 📦 Installation

1. Clone le dépôt ou télécharge les fichiers du projet :
```bash
git clone <url-du-depot>
cd ECF-FRONTEND
```

2. Installe les dépendances :
```bash
npm install
```

✅ Cela installera aussi **`react-scripts`** automatiquement, car il est utilisé dans les scripts (`start`, `build`) et est inclus dans les dépendances.

### 🧪 Lancer le projet

```bash
npm start
```

L'application sera disponible à l'adresse : [http://localhost:3000](http://localhost:3000)

### 🏗️ Build production

```bash
npm run build
```

Cela génère une version optimisée dans le dossier `build/`.

---

## ✨ Fonctionnalités

- 🔍 Affichage d’une liste de recettes avec image , titre et description avec possibilité de recherche.
- ➕ Ajout d’une nouvelle recette via un formulaire.
- ❤️ Ajout/Suppression de recettes aux favoris.
- 📄 Page de détails d’une recette.
- 🔄 Sauvegarde locale des données (via `localStorage`).

---

## 🧩 Composants principaux

| Composant               | Rôle                                                                 |
|------------------------|----------------------------------------------------------------------|
| `Header.js`            | Barre de navigation avec liens.                                      |
| `RecipeList.js`        | Liste de toutes les recettes disponibles.                            |
| `RecipeDetail.js`      | Affiche les détails d'une recette sélectionnée.                      |
| `RecipeForm.js`        | Formulaire pour ajouter une nouvelle recette.                        |
| `FavoriteRecipes.js`   | Affiche les recettes ajoutées aux favoris.                           |
| `Footer.js`            | Pied de page de l'application.                                       |
| `CustomLink.js`        | Composant personnalisé pour la navigation avec `react-router`.       |

---

## 🏗️ Structure du projet

```
ECF-FRONTEND/
├── public/
├── src/
│   ├── components/         → Composants réutilisables (UI)
│   ├── store/              → Redux : actions et reducers
│   ├── styles/             → Fichiers CSS
│   ├── assets/             → Images locales de recettes
│   ├── App.js              → Configuration des routes
│   ├── index.js            → Point d’entrée principal
│   ├── history.js          → Historique personnalisé pour navigation
│   ├── HistoryRouter.js    → Router personnalisé avec `history`
│   └── localStorage.js     → Persistance des recettes dans le navigateur
```

---

## 🛠️ Choix techniques

- **React** : Pour une interface utilisateur moderne et réactive.
- **Redux** : Gestion centralisée de l’état (recettes, favoris).
- **React Router v6** : Navigation entre les différentes pages.
- **LocalStorage** : Pour sauvegarder les recettes même après rechargement.
- **Architecture modulaire** : Séparation claire des composants, du store, du style et des assets.

---

## 📌 À améliorer

- Authentification utilisateur
- Responsive design mobile
- Connexion à une vraie base de données (MongoDB, Firebase…)
- Filtrage et recherche de recettes

---

## 🧑‍💻 Auteur

Wedad ALHAJJAR  
📫 Email : walhajjar@gmail.com 

