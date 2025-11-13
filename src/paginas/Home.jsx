import Evento from "../componentes/Evento";

function Home() {
  return (
    <main>
      <h1>Bem vindo ao Gerenciador de Eventos</h1>

      <p>Aqui voce fica por dentro dos eventos</p>
      <p>Eventos cadstrados:</p>
      {/*Exibindo os eventos*/}
      
        <Evento nome="Mundo Senai"
         data="05/11/2025" 
         local="Auditório" 
         />
        <Evento
          nome="Passeio didático"
          data="25/10/2025"
          local="Floresta do Chapecó"
        />
        <Evento nome="EFAPI" 
        data="17/10/2025"
         local="EFAPI"
          />
        <Evento nome="Mundo SENAI"
        data="15/11/2025"
        local="Auditório"
/>
    
    </main>
  );
}
export default Home;
