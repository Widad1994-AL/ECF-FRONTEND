import React from "react";
import { Routes, Route } from "react-router";
import history from "./history";
import HistoryRouter from "./HistoryRouter";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import RecipeDetail from "./components/RecipeDetail";
import FavoriteRecipes from "./components/FavoriteRecipes";
import Footer from "./components/Footer";
import "./styles/app.css";
function App() {
  return (
    <div className="app-wrapper">
      <HistoryRouter history={history}>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/category/:category" element={<RecipeList />} />
            <Route path="/add-recipe" element={<RecipeForm />} />
            <Route path="/favorites" element={<FavoriteRecipes />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </div>
        <Footer />
      </HistoryRouter>
    </div>
  );
}

export default App;
