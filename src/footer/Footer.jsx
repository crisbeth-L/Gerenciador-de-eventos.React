function Footer() {
    //função pra data
    const ano = new Date().getFullYear();
  
  
    return (
      <footer>
        <p> EventDuo- Técnico em Desenvolvimento de Sistemas- {ano}</p>
      </footer>
    ); //fecha retorno
  } //fecha função
  
  
  export default Footer;
  