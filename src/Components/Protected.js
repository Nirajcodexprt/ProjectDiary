import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        let signin = localStorage.getItem("login");
        if (!signin) {
            navigate("/");
        }
    }, []);
    return <Component />;
}

export default Protected;