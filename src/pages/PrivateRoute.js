import React from "react";
// import { Route, Navigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router"
import { useUserContext } from "../context/user_context";
import RequestSignInPage from "./RequestSignInPage"

const PrivateRoute = () => {
  const { myUser } = useUserContext();
  return myUser ? <Outlet /> : <RequestSignInPage />
};
export default PrivateRoute;
