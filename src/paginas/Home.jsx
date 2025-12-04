import Evento from "../componentes/Evento";

function Home({ eventos }) {
  return (
    <main>
      <h1>Bem-vindo ao Gerenciador de Eventos</h1>
      <h2>Aqui você fica por dentro dos eventos</h2>
      <h2>Eventos cadastrados anteriormente:</h2>

      {/* Eventos fixos */}
      <Evento nome="Mundo Senai" data="05/11/2025" local="Auditório" />
      <Evento nome="Passeio didático" data="25/10/2025" local="Floresta do Chapecó" />
      <Evento nome="EFAPI" data="17/10/2025" local="EFAPI" />
      <Evento nome="Curso Digital Skills" data="10/12/2025" local="SENAI" />

      {/* Eventos dinâmicos */}
      {eventos && eventos.length > 0 && (
        <>
          <h3>Eventos adicionados recientemente pelo usuário:</h3>
          {eventos.map((evento) => (
            <Evento
              key={evento.id}
              nome={evento.nome}
              data={evento.data}
              local={evento.local}
            />
          ))}
        </>
      )}
    </main>
  );
}

export default Home;
