import React, {useState} from "react";
import {ClockCircleTwoTone} from "@ant-design/icons";
import axiosInstance from "../util/axiosInstance";


export default function Planned(props) {
    const [task, setTask] = useState([]);
    const [trigger, setTrigger] =useState(true);
    const date = new Date();
    const onChangeHandler = (e) => {
        setTask(e.target.value)
    }
    const onClickHandler = () => {
        if (task.length > 0) {
            axiosInstance.post('/task/save', {
                u_id: localStorage.getItem('u_id'),
                name: task,
                date: date,
            }, {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
                .then((res) => {
                    if (res.status === 201) {
                        setTask('')
                    }
                })
        }
    }
    const onEnterHandler = (e) => {
        if (e.key === 'Enter') {
            onClickHandler()
        }
    }
    const general = {
    fontSize: '20px',
    marginLeft: '30px',
    marginTop: '30px'
    }
    const titleStyle = {
        fontSize: '22px',
        fontWeight: '700' ,
        marginLeft: '10px'
    }
    const inputStyle = {
        marginTop: '20px',
        marginLeft: '30px',
        marginBottom: '20px',
        width: '500px',
        fontSize: '18px'
    }
    const buttonStyle ={
        // marginLeft: '10px',
        borderRadius: "0 5px 5px 0",
        backgroundColor: 'cornflowerblue',
        fontSize: '18px'
        // width: "40px"
    }
    return(
        <div>
            <div style={general}><ClockCircleTwoTone /><span style={titleStyle}>Make Your Event Plan</span></div>
            <input value = {task} placeholder = 'Please input your event'
                   style={inputStyle}
                   onChange={onChangeHandler}
                   onKeyPress={onEnterHandler}
            />
            <button
                style={buttonStyle}
                onClick={onClickHandler}
            >Submit</button>
            <div>
                <ul>

                </ul>
            </div>

        </div>
    )
}
