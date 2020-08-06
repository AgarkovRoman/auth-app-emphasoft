import React, { useState } from 'react';
import './App.sass';
import { Route, Switch, Redirect, withRouter, Link } from 'react-router-dom';
import Login from './pages/login/Login';
import First from './pages/firstTask/firstTask';
import { AuthContext } from './context/auth';
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/home/Home";

function App(props) {

    const existingTokens = JSON.parse(localStorage.getItem("tokens"));
    const [authTokens, setAuthTokens] = useState(existingTokens);

    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    }

    return (
        <>
            <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
                <div>
                    <Switch>
                        <PrivateRoute exact path="/" component={Home} />
                        <Route exact path="/auth-app-emphasoft" component={Login} />
                        <PrivateRoute path="/first" component={First} />
                    </Switch>
                </div>
            </AuthContext.Provider>
        </>
    );
}

export default App;
