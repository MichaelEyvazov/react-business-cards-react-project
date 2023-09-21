import React from "react";
import { useUser } from "../users/providers/UserProvider";
import { Navigate, Outlet } from "react-router-dom";
import ROUTES from "../routes/routesModel";
import SandBoxPage from "../pages/SandBoxPage";

const Sandbox = () => {
  const { user } = useUser();
  if (!user || !user.isAdmin) return <Navigate replace to={ROUTES.ROOT} />;

  return (
    <>
      <SandBoxPage />
    </>
  );
};

export default Sandbox;
