import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCreditCard } from "react-icons/fa";
import './Check.css';

const Check: React.FC = () => {
  const navigate = useNavigate();

  const handlePagamento = () => {
    
    navigate("/fin");
  };

  return (
    <div className="container">
      <div className="link-home">
        <Link to="/car">Voltar</Link>
      </div>

      <div className="container-btn">
        <FaCreditCard className="icon-cadastro" />
        <h1>Pagamento</h1>
      </div>

      <div className="container-cont">
        <input type="text" placeholder="Nome no cartão" />
        <input type="text" placeholder="Número do cartão" />
        <input type="text" placeholder="MM/AA" />
        <input type="text" placeholder="CVV" />
        <input type="email" placeholder="Email (opcional)" />
      </div>

      <div className="container-cada">
        <button onClick={handlePagamento}>Pagar</button>
      </div>
    </div>
  );
};

export default Check;
