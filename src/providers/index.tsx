import React from "react";
import { ReactNode } from "react";
import TechProvider from "./tech";
import UserProvider from "./user";

interface IProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: IProvidersProps) => {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
};

export default Providers;
