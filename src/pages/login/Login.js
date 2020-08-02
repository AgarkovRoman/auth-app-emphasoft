import React from "react";
import Form from "../../components/Form/Form";
import '../../App.sass';

function Login(props) {
    return (
        <>
            <h1 className="main-title">Hi! Log in, please</h1>
            <Form props={props}/>
        </>
    )
}

export default Login;
