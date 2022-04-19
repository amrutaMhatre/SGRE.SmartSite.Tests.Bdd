import React, { Suspense } from "react";
import { render } from "react-dom";
import "react-toastify/dist/ReactToastify.min.css";
import Routes from "./routes";
import "./styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MsalProvider,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./config/authConfig";
import Login from "./components/Login";
import Auth from "./components/Auth";

function App() {
  const msalInstance = new PublicClientApplication(msalConfig);
  return (
    <>
      <MsalProvider instance={msalInstance}>
        <AuthenticatedTemplate>
          <Auth />
          <Routes />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          {/*<Login />*/}
          <Auth />
          <Routes />
        </UnauthenticatedTemplate>
      </MsalProvider>
    </>
  );
}
const rootElement = document.getElementById("root");
render(<App />, rootElement);
