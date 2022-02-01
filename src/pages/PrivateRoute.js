import React from "react";
import { Outlet } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import RequestSignInPage from "./RequestSignInPage";

const PrivateRoute = () => {
  const { user } = useAuth0();
  return user ? <Outlet /> : <RequestSignInPage />;
};
export default PrivateRoute;
