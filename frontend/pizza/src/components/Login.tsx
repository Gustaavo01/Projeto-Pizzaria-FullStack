import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserPlus } from "react-icons/fa";
import axios from 'axios';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const fazerLogin = async () => {
    try {
      const res = await axios.post<{ token: string }>('http://localhost:5000/api/auth/log', {
        email,
        password
      });
      localStorage.setItem('token', res.data.token);
      navigate('/che');
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Erro: " + err.message);
      }
    }
  }

  return (
    <div className='container'>
      <div className='link-home'>
        <Link to={"/cad"}>Voltar</Link>
      </div>
      <div className='container-btn'>
        <FaUserPlus className='icoon-cadastro'/>
        <h1>Login</h1>
      </div>
      <div className='container-cont'>
        <input type="email" placeholder='Digite Seu Email...' value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder='Digite Sua Senha' value={password} onChange={e => setPassword(e.target.value)} required />
      </div>
      <div className='container-cadastro'>
        <button onClick={fazerLogin}>Login</button>
      </div>
      <div className='link-container'>
        <Link to={"/cad"}>Não tem Cadastro? Clique aqui</Link>
      </div>
    </div>
  );
}

export default Login;
