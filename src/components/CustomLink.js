import React from "react";
import history from "../history";

function CustomLink({ to, children, ...props }) {
  const handleClick = (e) => {
    e.preventDefault(); // Empêche le rechargement complet de la page
    history.push(to);   // Change la route via l'objet history
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

export default CustomLink;
