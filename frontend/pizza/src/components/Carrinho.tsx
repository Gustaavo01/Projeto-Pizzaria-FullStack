import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";
import "./Carinho.css";

const Carrinho = () => {
  const { cart, removeFromCart } = useContext(CartContext)!;

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (    
    <div className="carrinho-container">
      <div className="btn-back">
       <Link to={"/dash"}>Voltar</Link>
      </div>
      <h2>Meu Carrinho</h2>

      {cart.length === 0 ? (
        <p className="carrinho-vazio">Seu carrinho está vazio</p>
      ) : (
        <div className="carrinho-itens">
          {cart.map((item, index) => (
            <div key={index} className="carrinho-item">
              <span className="item-nome">{item.name}</span>
              <span className="item-quantidade">x {item.quantity}</span>
              <span className="item-preco">R$ {item.price * item.quantity}</span>
              <button
                className="btn-remover"
                onClick={() => removeFromCart(item.name)}
              >
                Remover
              </button>
            </div>
          ))}

          <div className="carrinho-total">
            <strong>Total: R$ {total}</strong> 
             <Link to="/cad" className="btn-pagamento">
             Ir para o pagamento
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrinho;
