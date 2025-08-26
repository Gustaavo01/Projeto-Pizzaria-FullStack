import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <button className="btn-voltar" onClick={() => navigate("/dash")}>
        ⬅ Voltar
      </button>

      <div className="notfound-content">
        <h1>404</h1>
        <h2>Oops! Página não encontrada</h2>
        <p>A página que você está tentando acessar não existe.</p>
      </div>
    </div>
  );
};

export default NotFound;
