import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { UserContext } from "../../providers/user";
import { ContentContainer } from "../../styles/containers";
import HomePage from "./styles";
import TechList from "./TechList";

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <HomePage>
      <Header
        button="Sair"
        onClick={() => localStorage.removeItem("@kenzie-hub:token")}
      />
      <section>
        <ContentContainer>
          <h2>Olá, {user.name}</h2>
          <span>{user.course_module}</span>
        </ContentContainer>
      </section>
      <TechList />
      <Outlet />
    </HomePage>
  );
};

export default Home;
