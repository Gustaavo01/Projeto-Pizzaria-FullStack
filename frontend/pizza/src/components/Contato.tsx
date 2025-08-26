import React from "react";
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Contato.css";

const Contato = () => {
  return (
    <div className="contato-container">
      <div className="contato-voltar-topo">
        <Link to="/dash" className="btn-voltar">⬅ Voltar</Link>
      </div>

      <h2>Entre em Contato</h2>
      <p className="contato-subtitulo">
        Ficaremos felizes em atender você! Escolha a melhor forma de falar conosco:
      </p>

      <div className="contato-info">
        <div className="contato-card">
          <FaPhone className="contato-icone" />
          <h3>Telefone</h3>
          <p>(11) 4002-8922</p>
        </div>

        <div className="contato-card">
          <FaWhatsapp className="contato-icone whatsapp" />
          <h3>WhatsApp</h3>
          <p>(11) 98888-8888</p>
        </div>

        <div className="contato-card">
          <FaEnvelope className="contato-icone" />
          <h3>Email</h3>
          <p>contato@pizzariadogustavo.com</p>
        </div>

        <div className="contato-card">
          <FaMapMarkerAlt className="contato-icone" />
          <h3>Endereço</h3>
          <p>Rua das Pizzas, 123 - Itaquaquecetuba, SP</p>
        </div>
      </div>
    </div>
  );
};

export default Contato;
