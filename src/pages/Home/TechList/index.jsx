import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TechContext } from "../../../providers/tech";
import Button from "../../../styles/button";
import { ContentContainer, ThemeContainer } from "../../../styles/containers";
import TechCard from "./TechCard";

const TechList = () => {
  const { techs, loadingTech } = useContext(TechContext);

  return (
    <main>
      <ContentContainer>
        <div>
          <h3>Tacnologias</h3>
          <Link to="tech/new">
            <Button size="small">+</Button>
          </Link>
        </div>
        <ThemeContainer>
          {loadingTech ? (
            <div>Carregando...</div>
          ) : techs.length ? (
            <ul>
              {techs.map((tech) => (
                <TechCard tech={tech} key={tech.id} />
              ))}
            </ul>
          ) : (
            <div>
              <strong>Você ainda não possui nenhum tecnologia</strong>
              <Link to="tech/new">
                <Button size="big" theme="primary">
                  Adicione
                </Button>
              </Link>
            </div>
          )}
        </ThemeContainer>
      </ContentContainer>
    </main>
  );
};

export default TechList;
