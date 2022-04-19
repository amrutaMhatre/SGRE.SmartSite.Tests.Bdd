import React, { FC, useEffect } from "react";
import { useMsal, useAccount } from "@azure/msal-react";
import { loginRequest } from "../../config/authConfig";
import api from "../../middlewares/api";

const Auth: FC = (props) => {
  const { instance, accounts, inProgress } = useMsal();
  const account = useAccount(accounts[0] || {});

  useEffect(() => {
    if (account) {
      instance
        .acquireTokenSilent({
          ...loginRequest,
          account: account,
        })
        .then((response) => {
          api.setHeader(response.accessToken);
        });
    }
  }, [account, instance]);

  return <></>;
};
export default Auth;
