import React, { FC } from "react";
import { loginRequest } from "../../config/authConfig";
import { useMsal } from "@azure/msal-react";
import { Button } from "react-bootstrap";

const Login: FC = (props) => {
  const { instance } = useMsal();
  return (
    <>
      <Button
        variant="extended"
        color="secondary"
        onClick={() => instance.loginRedirect(loginRequest)}
      >
        Login
      </Button>
    </>
  );
};

export default Login;
