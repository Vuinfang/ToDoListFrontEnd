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
    const general = {
        // display: 'flex',
        margin: '0 auto',
        marginTop: '200px',
        // alignItems: 'center',
        textAlign: 'center',
        // justifyContent: 'center',
        width: '500px',
        height: '350px',
        backgroundColor: 'rgb(200, 200, 245)',
        border: '1px solid #ddd',
        borderRadius: '10px'
    }
    const spaceStyle = {
        marginBottom: '20px',
        fontSize: '18px',
        fontWeight: '650'
    }
    const inputStyle = {
        marginLeft: '10px',
        width: '300px',
        boder: '1px solid',
        borderRadius: '6px'  
    }
    const buttonStyle = {
        marginLeft: '30px',
        marginTop: '17px',
        borderRadius: "5px",
        backgroundColor: 'rgb(240 250 250)',
        fontSize: '16px'
    }

    return(
        <div style={general}>
            <h1 style={{marginTop:'28px', marginBottom: '25px'}}>Please take few steps to register</h1>
            <div style={spaceStyle}>
                <span style = {{textAlign: 'right'}}>Email </span>
                <input value={email} placeholder= 'Please input your email'
                style = {inputStyle}
                onChange={emailHandler}/>
            </div>
            <div style={spaceStyle}>
                <span>Password </span>
                <input value={password} type='password' placeholder= 'Please input your password'
                    style = {inputStyle}
                    onChange={passwordHandler}/>
            </div>
            <div style={spaceStyle}>
                <span>Username </span>
                <input value={username} placeholder= 'Please input your username'
                    style = {inputStyle}
                    onChange={usernameHandler}/>
            </div>
            <button style={buttonStyle} onClick={signUpHandler}>Sign up</button>
        </div>
    )
}
