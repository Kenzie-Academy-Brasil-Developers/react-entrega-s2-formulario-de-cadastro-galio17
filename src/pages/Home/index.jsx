import React from "react";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div>
      <Header button="Sair" />
      <section>
        <h2>Olá, Usuário</h2>
        <span>Primeiro módulo (Introdução ao Frontend)</span>
      </section>
      <main>
        <strong>Que pena! Estamos em desenvolvimento :(</strong>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </main>
    </div>
  );
};

export default Home;
