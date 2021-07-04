import React, {useState} from "react";
import axiosInstance from "../util/axiosInstance";
import { useHistory } from "react-router-dom";
export default function Login () {
    let history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const signInHandler = () => {
        axiosInstance.post('/user/login', {
            email,
            password,
        }).then((res) => {
            if (res.data.code === 200) {
                localStorage.setItem('u_id', res.data.data.user.u_id);
                localStorage.setItem('token', res.data.data.token);
                history.push("/");
            }
        })
    }

    return(
        <div>
            <div>
                <span>Email </span>
                <input value={email} placeholder= 'Please input your email'
                       onChange={emailHandler}/>
            </div>
            <div>
                <span>Password </span>
                <input value={password} type='password' placeholder= 'Please input your password'
                       onChange={passwordHandler}/>
            </div>
            <button onClick={signInHandler}>Sign in</button>
        </div>
    )
}

