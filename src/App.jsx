import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
  const [logado, setLogado] = useState(false);

  function handleCadastrarEvento(novoEvento) {
    setEventos([...eventos, novoEvento]);
  }

  function handleLogout() {
    setLogado(false);   
  }

  return (
    <Router>
      <div className="app">
        {logado && <Header onLogout={handleLogout} />} 

        <Routes>
          <Route path="/" element={<Login setLogado={setLogado} />} />

          <Route
            path="/home"
            element={logado ? <Home eventos={eventos} /> : <Navigate to="/" />}
          />

          <Route
            path="/sobre"
            element={logado ? <Sobre /> : <Navigate to="/" />}
          />

          <Route
            path="/CadastroEvento"
            element={
              logado ? (
                <CadastroEvento onCadastrar={handleCadastrarEvento} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>

        {logado && <Footer />}
      </div>
    </Router>
  );
}

export default App;
