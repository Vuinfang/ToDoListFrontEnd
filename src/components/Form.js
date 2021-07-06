import React, {useState} from "react";
import MyDAY from '../pages/MyDay';
import axiosInstance from "../util/axiosInstance";

export default function Form(props) {
    const [task, setTask] = useState('')
    const [complete, setComplete] = useState('')

    const deleteHandler = (i) => {
        axiosInstance.delete(`/task/delete?t_id=${i}`,
            {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
            .then((res) => {
                console.log('delete', res)
                if(res.status === 200) {
                    props.setTrigger(!props.trigger)
                }
            })
    }
    const completeHandler = (i) => {
        axiosInstance.put(`/task/update`, {
            t_id: i,
            isFinished: true,
        }, {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
            .then((res) => {
                console.log('update', res)
                if(res.status === 200) {
                    props.setTrigger(!props.trigger)
                }
            })

    }
    const boxStyle = {
        listStyle: 'none',
        fontSize: '18px',
        marginTop: '20px'
    }
    const buttonStyle ={
        marginLeft: '10px',
        marginTop: '7px',
        borderRadius: "0 5px 5px 0",
        backgroundColor: 'cornflowerblue',
        fontSize: '12px'
        // width: "40px"
    }
    // console.log(props.complete)
    return(
        <div>
            <ul>
                {props.task.map((e, i) => {
                    return (
                        <div key = {i+e.name+i}>
                            <li key={e.name+i}  style={boxStyle}>{e.name}</li>
                            <button key={i+e.name}
                                onClick={() => deleteHandler(e.t_id)}
                                    style={buttonStyle}
                            >Delete</button>
                            <button key={e.name+i+i}
                            onClick={() => completeHandler(e.t_id)}
                                    style={buttonStyle}
                            >Add to Complete
                            </button>
                        </div>
                    )
                })}
            </ul>
            <hr/>
            <ul>
                {props.complete.map((e, i) => {
                    return (
                        <div key = {i+e+i}>
                            <li key={e+i}  style={boxStyle}>{e.name}</li>
                            <button key={i+e+e+i}
                                    onClick={() => deleteHandler(e.t_id)}
                                    style={buttonStyle}
                            >Delete</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
