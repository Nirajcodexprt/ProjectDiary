import React from "react";
import { LoginSocialGoogle } from "reactjs-social-login";

import {
  GithubLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { useCallback, useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";
const Google = () => {
  const btnbg = useColorModeValue("#");
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState();

  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);
  console.log("profile", profile);
  console.log("provider", provider);
  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);
  const REDIRECT_URI = "http://localhost:3000";
  const onLogout = useCallback(() => {}, []);
  return (
    <>
      <LoginSocialGoogle
        client_id={process.env.REACT_APP_GG_APP_ID || ""}
        onLoginStart={onLoginStart}
        redirect_uri={REDIRECT_URI}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          setProvider(provider);
          setProfile(data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton className="GoogleButton hover" text="" />
      </LoginSocialGoogle>
    </>
  );
};

export default Google;
