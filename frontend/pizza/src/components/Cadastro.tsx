import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import axios from "axios";
import "./Cadastro.css";

const Cadastro: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailConfirm, setEmailConfirm] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [rua, setRua] = useState<string>("");
  const [numero, setNumero] = useState<string>("");
  const [bairro, setBairro] = useState<string>("");

  const cadastrarUsuario = async () => {
    if (email !== emailConfirm) return alert("Emails não coincidem");
    if (password !== passwordConfirm) return alert("Senhas não coincidem");

    const dados = { name, email, password, rua, numero, bairro };

    try {
      const res = await axios.post<{ message: string }>(
        "http://localhost:5000/api/auth/cad",
        dados
      );
      alert(res.data.message);
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Erro: " + err.message);
      }
    }
  };

  return (
    <div className="container">
      <div className="link-home">
        <Link to={"/car"}>Voltar</Link>
      </div>
      <div className="container-btn">
        <FaUserPlus className="icoon-cadastro" />
        <h1>Cadastro</h1>
      </div>
      <div className="container-cont">
        <input
          type="text"
          placeholder="Seu Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Digite Seu Email Aqui..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Digite Novamente Seu Email"
          value={emailConfirm}
          onChange={(e) => setEmailConfirm(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Digite Sua Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Digite Novamente"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
        />
      </div>
      <div className="container-cadastro">
        <input
          type="text"
          placeholder="Digite Sua Rua"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
        />
        <input
          type="number"
          placeholder="Numero Da casa"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <input
          type="text"
          placeholder="Bairro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
          required
        />
        <button onClick={cadastrarUsuario}>Enviar</button>
      </div>
      <div className="link-container">
        <Link to={"/log"}>Ja tem Cadastro?Clique aqui</Link>
      </div>
    </div>
  );
};

export default Cadastro;
