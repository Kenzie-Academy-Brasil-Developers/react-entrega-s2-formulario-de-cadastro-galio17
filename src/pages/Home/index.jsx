import React, { useContext } from "react";
import Header from "../../components/Header";
import { UserContext } from "../../providers/user";
import { ContentContainer } from "../../styles/containers";
import HomePage from "./styles";

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <HomePage>
      <Header button="Sair" onClick={() => localStorage.clear()} />
      <section>
        <ContentContainer>
          <h2>Olá, {user.name}</h2>
          <span>{user.course_module}</span>
        </ContentContainer>
      </section>
      <main>
        <ContentContainer>
          <strong>Que pena! Estamos em desenvolvimento :(</strong>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </ContentContainer>
      </main>
    </HomePage>
  );
};

export default Home;
