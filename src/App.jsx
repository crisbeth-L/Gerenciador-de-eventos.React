import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import CadastroEvento from "./paginas/CadastroEvento";
import "./style.css";
import "./header/header.css";
import "./footer/footer.css";
import "./paginas/CadastroEvento.css";


function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/CadastroEvento" element={<CadastroEvento/>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
