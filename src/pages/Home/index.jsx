import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("@kenzie-hub:user")));
  }, []);

  return (
    <div>
      <Header button="Sair" onClick={() => localStorage.clear()} />
      <section>
        <h2>Olá, {user.name}</h2>
        <span>{user.course_module}</span>
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
