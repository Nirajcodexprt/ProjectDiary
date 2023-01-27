import React from "react";
import { LoginSocialGithub } from "reactjs-social-login";

import { GithubLoginButton } from "react-social-login-buttons";
import { useCallback, useState } from "react";
const Github = () => {
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
    <LoginSocialGithub
      client_id={process.env.REACT_APP_GITHUB_APP_ID || "c15d07a4efc0be8f8586"}
      client_secret={
        process.env.REACT_APP_GITHUB_APP_SECRET ||
        "71ce16220f34063b3a322447449ab42ea0a981b4"
      }
      redirect_uri={REDIRECT_URI}
      onLoginStart={onLoginStart}
      onLogoutSuccess={onLogoutSuccess}
      onResolve={({ provider, data }) => {
        setProvider(provider);
        setProfile(data);
      }}
      onReject={(err) => {
        console.log(err);
      }}
    >
      <GithubLoginButton className="GoogleButton" text="" />
    </LoginSocialGithub>
  );
};

export default Github;
