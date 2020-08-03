import React, {useEffect, useState} from 'react';
import './Form.sass';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {useAuth} from "../../context/auth";
import {Redirect} from "react-router-dom";

function Form(props) {
    const { register, handleSubmit, errors } = useForm();

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    async function postLogin (data) {
        try {
            const response = await axios.post('http://emphasoft-test-assignment.herokuapp.com/api-token-auth/', data);
            if (response.status === 200) {
                console.log('200', response.data.token);
                setAuthTokens(response.data);
                setLoggedIn(true);

                setUserName(data.username);
                setPassword(data.password);

                // console.log('username', data.username);
                // console.log('password', data.password);
                // console.log('name', userName)
                // console.log('password', password)
                // console.log('token', response.data.token)
            }

        } catch (e) {
            console.log(e);
        }
    }
    console.log(errors);

    if (isLoggedIn) {
        return <Redirect to="/" />;
    }

    return (
    <div className="login-form-wrap">
        <div className="hello-box">
            <form className="form" onSubmit={handleSubmit(postLogin)}>
                <div className="form-log-in" id="form-log-in">
                    <div className="form__group">
                        <label className="form__label">UserName</label>
                        <input
                            className="form__input"
                            type="text"
                            tabIndex="1"
                            placeholder="Enter UserName"
                            name="username"
                            ref={register({ required: true, minLength: 3, maxLength: 30 })}
                        />
                        {errors.username && errors.username.type === 'required' && <p className="error">This is required field</p> }
                        {errors.username && errors.username.type === 'minLength' && <p className="error">UserName should be more then 3 symbols</p> }
                        {errors.username && errors.username.type === 'maxLength' && <p className="error">UserName should be less then 30 symbols</p> }

                    </div>
                    <div className="form__group">
                        <label className="form__label" htmlFor="Password">Password</label>
                        <input
                            className="form__input"
                            type="password"
                            tabIndex="2"
                            placeholder="Enter password"
                            name="password"
                            ref={register({ required: true, minLength: 6, maxLength: 30 })}
                        />
                        {errors.password && errors.password.type === 'required' && <p className="error">This is required field</p> }
                        {errors.password && errors.password.type === 'minLength' && <p className="error">UserName should be more then 6 symbols</p> }
                        {errors.password && errors.password.type === 'maxLength' && <p className="error">UserName should be less then 30 symbols</p> }
                    </div>
                    <div className="form__group">
                        <button className="button form__button button--blue" type="submit">Login</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    );
}

export default Form;
