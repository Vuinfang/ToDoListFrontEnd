import React, {useState} from "react";
import {ClockCircleTwoTone} from "@ant-design/icons";


export default function Planned(props) {
    const [task, setTask] = useState('')
    const [complete, setComplete] = useState('')
    const onChangeHandler = (e) => {
        setTask(e.target.value)
    }
    const onClickHandler = () => {
        if (task.length > 0) {
            const temp = [...props.task]
            temp.push(task)
            props.setTask(temp)
            setTask("")
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
    const titileStyle = {
        fontSize: '22px',
        fontWeight: '700' ,
        marginLeft: '10px'
    }
    const inputStyle = {
        marginTop: '20px',
        marginLeft: '30px',
        marginButtom: '20px',
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
            <div style={general}><ClockCircleTwoTone /><span style={titileStyle}>Make Your Event Plan</span></div>
            <input value = {task} placeholder = 'Please input your event'
                   style={inputStyle}
                   onChange={onChangeHandler}
                   onKeyPress={onEnterHandler}
            ></input>
            <button
                style={buttonStyle}
                onClick={onClickHandler}
            >Submit</button>

        </div>
    )
}
