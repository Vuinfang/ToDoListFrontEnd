import React, {useState} from "react";
import axiosInstance from "../util/axiosInstance";
import { useHistory } from "react-router-dom";
export default function Register () {
    let history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const usernameHandler = (e) => {
        setUsername(e.target.value)
    }
    const signUpHandler = () => {
        axiosInstance.post('/user/register', {
            email,
            password,
            username
        }).then((res) => {
            if (res.data.code === 200) {
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
            <div>
                <span>Username </span>
                <input value={username} placeholder= 'Please input your username'
                       onChange={usernameHandler}/>
            </div>
            <button onClick={signUpHandler}>Sign up</button>
        </div>
    )
}
