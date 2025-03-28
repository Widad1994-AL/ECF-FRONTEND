import React from "react";
import CustomLink from "./CustomLink";
import "../styles/Header.css";

function Header() {
  return (
    <header className="main-header">
      <div className="overlay">
        <nav className="main-nav">
          <ul>
            <li><CustomLink to="/">Accueil</CustomLink></li>
            <li><CustomLink to="/category/entrees">Entrées</CustomLink></li>
            <li><CustomLink to="/category/plats">Plats</CustomLink></li>
            <li><CustomLink to="/category/desserts">Desserts</CustomLink></li>
            <li><CustomLink to="/add-recipe">Ajouter une Recette</CustomLink></li>
            <li><CustomLink to="/favorites">Favoris</CustomLink></li>
          </ul>
        </nav>

        <div className="header-content">
          <h1>🍽️ Mon Livre de Recettes</h1>
          <p>Des plats faits maison, simples et savoureux</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
