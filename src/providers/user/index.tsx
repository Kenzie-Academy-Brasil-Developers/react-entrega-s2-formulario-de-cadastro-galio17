import { AxiosResponse } from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services";
import { ITech } from "../tech";
// import { ITech } from "../tech";

interface IWorks {
  title: string;
  description: string;
  deploy_url: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs?: ITech[];
  works?: IWorks[];
  created_at: string;
  updated_at: string;
  avatar_url: string | null;
}

export type IUserForm = {
  email: string;
  password: string;
  confirmPassword?: string;
  name?: string;
  bio?: string;
  contact?: string;
  course_module?: string;
};

interface IUserContext {
  user: IUser | null;
  loading: boolean;
  login: (loginData: IUserForm) => void;
  signIn: (signInData: IUserForm) => void;
  getProfile: () => void;
}

interface IUserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProviderProps) => {
  async function login(loginData: IUserForm) {
    await api
      .post<{ user: IUser; token: string }>("sessions", loginData)
      .then(({ data: { user, token } }: AxiosResponse) => {
        const authorization = `Bearer ${token}`;

        api.defaults.headers.common["Authorization"] = authorization;

        localStorage.removeItem("@kenzie-hub:token");
        localStorage.setItem("@kenzie-hub:token", JSON.stringify(token));

        setUser(user);
        navigate("/", { replace: true });
      });
  }

  async function signIn(signInData: IUserForm) {
    await api.post<IUser>("users", signInData).then(() => {
      login(signInData);
    });
  }

  async function getProfile(): Promise<void> {
    await api
      .get<IUser>("profile")
      .then(({ data }: AxiosResponse) => setUser(data));
  }

  const navigate = useNavigate();

  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@kenzie-hub:token");

      if (token) {
        try {
          const authorization = `Bearer ${JSON.parse(token)}`;

          api.defaults.headers.common["Authorization"] = authorization;

          await getProfile();
        } catch (error) {
          console.error(error);
        }
      }

      setLoading(false);
    }

    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, login, signIn, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
