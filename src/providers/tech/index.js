import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import { UserContext } from "../user";

export const TechContext = createContext();

const TechProvider = ({ children }) => {
  async function createTech(newTechData) {
    await api.post("users/techs", newTechData);
  }

  async function editTech(editTechData, editTechId) {
    await api.put(`users/tech/${editTechId}`, editTechData);
  }

  async function deleteTech(deleteTechId) {
    await api.delete(`users/tech/${deleteTechId}`);
  }

  const { user } = useContext(UserContext);
  const [techs, setTechs] = useState(null);

  useEffect(() => {
    if (user) setTechs(user.techs);
  }, [user]);

  return (
    <TechContext.Provider value={{ techs, createTech, editTech, deleteTech }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
