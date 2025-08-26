import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";
import "./Finali.css"

const Finali = () => {
  return (
    <div className="container-final">
      
     
      <FaCheckCircle className="icon-success"/>

    
      <h1>Obrigado pela sua compra!</h1>
      <p>
        Seu  pedido e o andamento da entrega Estão Sendo Preparados 
        Aguarde 40 50 minutos de Entrega
      </p>

      <div className='link-hom'>
       <Link to="/" className="link-botao">
        <button className="btn-voltar">Voltar para a loja</button>
      </Link>
      </div>
     
    </div>
  )
}

export default Finali;
