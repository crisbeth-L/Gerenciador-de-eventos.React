import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2>Gerenciador de Eventos SENAI</h2>
      <nav>
        <Link to="/">Início</Link> | <Link to="/sobre">Sobre</Link>| <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
