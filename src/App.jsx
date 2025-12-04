// Importa componentes e funções necessárias do React Router
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Importa o hook useState do React para gerenciar estados
import { useState } from "react";

// Importa os componentes Header e Footer
import Header from "./header/Header";
import Footer from "./footer/Footer";

// Importa as páginas principais da aplicação
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import CadastroEvento from "./paginas/CadastroEvento";

// Importa os arquivos de estilo CSS globais e específicos
import "./style.css";
import "./header/header.css";
import "./footer/footer.css";
import "./paginas/CadastroEvento.css";
import "./componentes/Modal.css";

// Importa a página de Login
import Login from "./paginas/Login";


// Função principal do aplicativo
function App() {
  // Estado que guarda a lista de eventos cadastrados
  const [eventos, setEventos] = useState([]);

  // Estado que controla se o usuário está logado ou não
  const [logado, setLogado] = useState(false);

  // Função que adiciona um novo evento ao array de eventos
  function handleCadastrarEvento(novoEvento) {
    setEventos([...eventos, novoEvento]);
  }

  // Função que faz logout, alterando o estado "logado" para falso
  function handleLogout() {
    setLogado(false);   
  }

  // Retorno do componente App
  return (
    // Router envolve toda a aplicação para habilitar rotas
    <Router>
      <div className="app">
        
        {/* Renderiza o Header apenas se o usuário estiver logado */}
        {logado && <Header onLogout={handleLogout} />} 

        {/* Define as rotas da aplicação */}
        <Routes>
          {/* Rota inicial "/" → mostra a página de Login */}
          <Route path="/" element={<Login setLogado={setLogado} />} />

          {/* Rota "/home" → só acessa se estiver logado, senão redireciona para "/" */}
          <Route
            path="/home"
            element={logado ? <Home eventos={eventos} /> : <Navigate to="/" />}
          />

          {/* Rota "/sobre" → só acessa se estiver logado, senão redireciona */}
          <Route
            path="/sobre"
            element={logado ? <Sobre /> : <Navigate to="/" />}
          />

          {/* Rota "/CadastroEvento" → só acessa se estiver logado, senão redireciona */}
          <Route
            path="/CadastroEvento"
            element={
              logado ? (
                // Se logado, renderiza CadastroEvento e passa função para cadastrar
                <CadastroEvento onCadastrar={handleCadastrarEvento} />
              ) : (
                // Se não logado, redireciona para Login
                <Navigate to="/" />
              )
            }
          />
        </Routes>

        {/* Renderiza o Footer apenas se o usuário estiver logado */}
        {logado && <Footer />}
      </div>
    </Router>
  );
}

export default App;
