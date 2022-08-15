import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services";
import { UserContext } from "../user";

export const TechContext = createContext();

const TechProvider = ({ children }) => {
  async function createTech(newTechData) {
    await api.post("users/techs", newTechData).then(() => {
      setLoadingTech(true);
      navigate("/", { replace: true });
    });
  }

  async function editTech(editTechData, editTechId) {
    await api.put(`users/techs/${editTechId}`, editTechData).then(() => {
      setLoadingTech(true);
      navigate("/", { replace: true });
    });
  }

  async function deleteTech(deleteTechId) {
    await api.delete(`users/techs/${deleteTechId}`).then(() => {
      setLoadingTech(true);
      navigate("/", { replace: true });
    });
  }

  const navigate = useNavigate();
  const { user, getProfile } = useContext(UserContext);
  const [techs, setTechs] = useState(null);
  const [loadingTech, setLoadingTech] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      try {
        await getProfile();
      } catch ({ response: { data } }) {
        console.error(data);
      }
    }

    loadProfile();
  }, [loadingTech]);

  useEffect(() => {
    if (user) {
      setTechs(user.techs);
      setLoadingTech(false);
    }
  }, [user]);

  return (
    <TechContext.Provider
      value={{ techs, loadingTech, createTech, editTech, deleteTech }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
