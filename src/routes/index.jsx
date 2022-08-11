import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignIn from "../pages/SigIn";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="register">
        <Route index element={<Navigate replace to="login" />} />
        <Route index path="login" element={<Login />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="home" element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/register/login" />} />
    </Routes>
  );
};

export default RoutesMain;
