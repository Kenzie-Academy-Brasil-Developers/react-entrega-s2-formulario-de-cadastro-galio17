import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  async function login(loginData) {
    await api.post("sessions", loginData).then(({ data: { user, token } }) => {
      api.defaults.headers.authorization = `Bearer ${token}`;

      localStorage.removeItem("@kenzie-hub:token");
      localStorage.setItem("@kenzie-hub:token", JSON.stringify(token));

      setUser(user);
      navigate("/", { replace: true });
    });
  }

  async function signIn(signInData) {
    await api.post("users", signInData).then(() => {
      login(signInData);
    });
  }

  async function getProfile() {
    await api.get("profile").then(({ data }) => setUser(data));
  }

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const token = JSON.parse(localStorage.getItem("@kenzie-hub:token"));

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          await getProfile();
        } catch ({ response }) {
          console.error(response);
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
