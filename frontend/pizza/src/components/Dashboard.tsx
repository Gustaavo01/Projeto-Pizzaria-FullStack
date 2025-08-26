import { useContext } from "react";
import { CartContext } from "../CartContext";
import img from "./img/logo.png";
import pizza from "./img/pizza2.jpg";
import "./Dashboard.css";
import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPizzaSlice,
  FaTachometerAlt,
  FaShoppingCart,
} from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const Dashboard = () => {
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
            <FaShoppingCart  size={25}  />
            {quantityTotal > 0 && <span className="badge">{quantityTotal}</span>}
            <Link to={"/car"} className="carrinho-link">Carrinho</Link>
          </li>
        </ul>
      </header>

      <main className="main-content">
        <div className="descricao">
          <div className="descricao-container">
            <p>CONHEÇA NOSSOS SABORES!</p>
            <p>DOCES E SALGADAS</p>
          </div>
          <div className="online">
            <p>Escolha Sua Pizza</p>
          </div>
        </div>

        <div className="pizzas-section">
          <h2>Pizzas Salgadas</h2>
          <div className="card-container">
            <div className="pizza-card">
              <img src={pizza} alt="Pizza Calabresa" />
              <h3>Calabresa</h3>
              <button className="btn-pizza" onClick={() => handleAddPizza("Calabresa", 40)}>
                Adicionar ao Carrinho
              </button>
            </div>
            <div className="pizza-card">
              <img src={pizza} alt="Pizza Mussarela" />
              <h3>Mussarela</h3>
              <button className="btn-pizza" onClick={() => handleAddPizza("Mussarela", 49)}>
                Adicionar ao Carrinho
              </button>
            </div>
            <div className="pizza-card">
              <img src={pizza} alt="Pizza Frango" />
              <h3>Frango com Catupiry</h3>
              <button className="btn-pizza" onClick={() => handleAddPizza("Frango com Catupiry", 50)}>
                Adicionar ao Carrinho
              </button>
            </div>
          </div>

          <h2>Pizzas Doces</h2>
          <div className="card-container">
            <div className="pizza-card">
              <img src={pizza} alt="Pizza Chocolate" />
              <h3>Chocolate</h3>
              <button className="btn-pizza" onClick={() => handleAddPizza("Chocolate", 35)}>
                Adicionar ao Carrinho
              </button>
            </div>
            <div className="pizza-card">
              <img src={pizza} alt="Pizza Nutella" />
              <h3>Nutella</h3>
              <button className="btn-pizza" onClick={() => handleAddPizza("Nutella", 38)}>
                Adicionar ao Carrinho
              </button>
            </div>
            <div className="pizza-card">
              <img src={pizza} alt="Pizza Romeu e Julieta" />
              <h3>Romeu e Julieta</h3>
              <button className="btn-pizza" onClick={() => handleAddPizza("Romeu e Julieta", 36)}>
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
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
              <p><FaWhatsapp /> <Link to={"/con"}>(11) 98888-8888</Link></p>
              <p><FaEnvelope /> <Link to={"/con"}>contato@pizzariagog.com</Link></p>
              <p><FaMapMarkerAlt /> Itaquaquecetuba - SP</p>
            </div>
            <div className="menu-footer">
              <h3>Menu</h3>
              <p><Link to={"/men"}>Pizzas</Link></p>
              <p><Link to={"/men"}>Bebidas</Link></p>
              <p><Link to={"/men"}>Promoções</Link></p>
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

export default Dashboard;
