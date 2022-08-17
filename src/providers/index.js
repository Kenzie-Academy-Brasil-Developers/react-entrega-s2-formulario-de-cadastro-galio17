import React from "react";
import TechProvider from "./tech";
import UserProvider from "./user";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
};

export default Providers;
