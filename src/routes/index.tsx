import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Home from "../pages/Home";
import CreateTech from "../pages/Home/CreateTech";
import EditTech from "../pages/Home/EditTech";
import Login from "../pages/Login";
import SignIn from "../pages/SigIn";

const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />}>
          <Route path="tech">
            <Route index element={<Navigate replace to="/" />} />
            <Route path="new" element={<CreateTech />} />
            <Route path=":id" element={<EditTech />} />
          </Route>
        </Route>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<SignIn />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default RoutesMain;
