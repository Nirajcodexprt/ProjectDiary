import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp/SignUp";

function Protected(props) {
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        let signin = localStorage.getItem("login");
        if (!signin) {
            navigate("/signin");
        }
    }, []);
    return <Component />;
}

export default Protected;