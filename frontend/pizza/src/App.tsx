import Cadastro from './components/Cadastro'
import Carrinho from './components/Carrinho'
import Check from './components/Check'
import Finali from './components/Finali'
import Dashboard from './components/Dashboard'
import Inicio from './components/Inicio'
import Menu from './components/Menu'
import Login from './components/Login'
import NotFound from './components/NotFound'
import { CartProvider } from './CartContext'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Contato from './components/Contato'

function App() {


  return (
     
    <CartProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/dash" element={<Dashboard/>} />
        <Route path="/car" element={<Carrinho/>} />
        <Route path="/che" element={<Check/>} />
        <Route path="/cad" element={<Cadastro/>} />
        <Route path="/men" element={<Menu/>} />
        <Route path="/con" element={<Contato/>} />
        <Route path="/log" element={<Login/>} />
        <Route path="/fin" element={<Finali/>} />
        <Route path="*" element={<NotFound />} />
       </Routes>
       </Router>
    </CartProvider>
    
  )
}

export default App
