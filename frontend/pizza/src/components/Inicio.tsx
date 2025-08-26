import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import img from "./img/logo.png";
import pizza from "./img/pizza2.jpg";
import "./Inicio.css";
import { Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
const Inicio = () => {
    const { addToCart, quantityTotal } = useContext(CartContext)!;

  const handleAddPizza = (name: string, price: number) => {
    addToCart({ name, price, quantity: 1 });
  };
  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <img src={img} alt="Logo" />
          <span>Pizzaria do Gustavo</span>
        </div>
        <nav className="menu">
          <ul>
            <li>
              <FaPizzaSlice />
              <Link to={"/"}>DashBoard</Link>
            </li>
            <li>
              <FaTachometerAlt />

              <Link to={"/dash"}>Pizzas</Link>
            </li>
            <li>
              <BiMessageDetail />
              <Link to={"/con"}>Contato</Link>
            </li>
          </ul>
        </nav>
        <ul className="menu-right">
          <li >
            <FaShoppingCart size={25} />
            {quantityTotal > 0 && <span className="badge">{quantityTotal}</span>}
            <Link to={"/car"} className="carrinho-link">Carrinho</Link>
          </li>
        </ul>
      </header>

      <main className="main-content">
        <div className="descricao">
          <div className="descricao-container">
            <p>A MELHOR PIZZA DA REGIÃO!</p>
            <p>SATISFAÇÃO E TRADIÇÃO</p>
          </div>
          <div className="online">
            <p>Peça sua Pizza Totalmente Remota</p>
            <Link to="/dash" className="btn-pizza">
              Fazer Pedido
            </Link>
          </div>
        </div>

        <div className="logo-pizza">
          <img src={pizza} alt="Logo" />
        </div>
      </main>
       <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Pizzaria do Gustavo</h2>
        </div>

        <div className="footer-links">
          <div className="contact">
            <h3>Contato</h3>
            <p><FaPhone /> <Link to={"/con"}>(11) 99999-9999</Link></p>
            <p><FaWhatsapp /><Link to={"/con"}> (11) 98888-8888</Link></p>
            <p><FaEnvelope /><Link to={"/con"}>contato@pizzariagog.com </Link> </p>
            <p><FaMapMarkerAlt /> Itaquaquecetuba - SP</p>
          </div>

          <div className="menu-footer">
            <h3>Menu</h3>
            <p><Link to={"/dash"}> Pizzas </Link></p>
            <p><Link to={"/dash"}> Bebidas</Link></p>
            <p><Link to={"/dash"}> Promoções </Link></p>
          </div>
        </div>

        <div className="footer-copy">
          <p>© 2025 Pizzaria do Gustavo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
     
    </div>
  );
};

export default Inicio;
