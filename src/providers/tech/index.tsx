import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services";
import { UserContext } from "../user";

export interface ITech {
  id?: string;
  title: string;
  status: string;
  created_at?: string;
  updated_at?: string;
}

interface ITechContext {
  techs: ITech[] | undefined;
  loadingTech: boolean;
  createTech: (newTechData: ITech) => void;
  editTech: (editTechData: ITech, editTechId: string) => void;
  deleteTech: (deleteTechId: string) => void;
}

interface ITechProvider {
  children: ReactNode;
}

export const TechContext = createContext<ITechContext>({} as ITechContext);

const TechProvider = ({ children }: ITechProvider) => {
  async function createTech(newTechData: ITech) {
    await api.post<ITech>("users/techs", newTechData).then(() => {
      setLoadingTech(true);
      navigate("/", { replace: true });
    });
  }

  async function editTech(editTechData: ITech, editTechId: string) {
    await api.put<ITech>(`users/techs/${editTechId}`, editTechData).then(() => {
      setLoadingTech(true);
      navigate("/", { replace: true });
    });
  }

  async function deleteTech(deleteTechId: string) {
    await api.delete<ITech>(`users/techs/${deleteTechId}`).then(() => {
      setLoadingTech(true);
      navigate("/", { replace: true });
    });
  }

  const navigate = useNavigate();
  const { user, getProfile } = useContext(UserContext);
  const [techs, setTechs] = useState<ITech[] | undefined>({} as ITech[]);
  const [loadingTech, setLoadingTech] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      try {
        await getProfile();
      } catch (error) {
        console.error(error);
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
