import React from "react";
import { LoginSocialFacebook } from "reactjs-social-login";

import { FacebookLoginButton } from "react-social-login-buttons";
import { useCallback, useState } from "react";
const Facebook = () => {
  const token = "c15d07a4efc0be8f8586";
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
  const onLogout = useCallback(() => { }, []);
  return (
    <LoginSocialFacebook
      appId={process.env.REACT_APP_FB_APP_ID || "f66636bf3acded9d634756f993c70841"}

      // fieldsProfile={
      //   "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
      // }
      onLoginStart={onLoginStart}
      onLogoutSuccess={onLogoutSuccess}
      redirect_uri={REDIRECT_URI}
      onResolve={({ provider, data }) => {
        setProvider(provider);
        setProfile(data);
      }}
      onReject={(err) => {
        console.log(err);
      }}
    >
      <FacebookLoginButton className="GoogleButton" text="" />
    </LoginSocialFacebook>
  );
};

export default Facebook;
