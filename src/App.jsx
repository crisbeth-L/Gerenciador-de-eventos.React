import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import CadastroEvento from "./paginas/CadastroEvento";
import "./style.css";
import "./header/header.css";
import "./footer/footer.css";
import "./paginas/CadastroEvento.css";
import "./componentes/Modal.css";
import Login from "./paginas/Login";

function App() {
  const [eventos, setEventos] = useState([]);

  function handleCadastrarEvento(novoEvento) {
    setEventos([...eventos, novoEvento]);
    console.log("Evento cadastrado:", novoEvento);
  }

  return (
    <Router>
      <div className="app">
        <Header />

        <Routes>
          {/* Agora a rota inicial "/" mostra o Login */}
          <Route path="/" element={<Login />} /> 
          <Route path="/home" element={<Home eventos={eventos} />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route
            path="/CadastroEvento"
            element={<CadastroEvento onCadastrar={handleCadastrarEvento} />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
