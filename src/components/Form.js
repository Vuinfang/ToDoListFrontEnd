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
    const deleteComplete = (i) => {
        // axiosInstance.delete(`/task/delete?t_id=${i}`,
        //     {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
        //     .then((res) => {
        //         console.log('delete', res)
        //         if(res.status === 200) {
        //             props.setTrigger(!props.trigger)
        //         }
        //     })
        console.log(i)

    }
    // console.log(props.complete)
    return(
        <div>
            <ul>
                {props.task.map((e, i) => {
                    return (
                        <div key = {i+e.name+i}>
                            <li key={e.name+i}>{e.name}</li>
                            <button key={i+e.name}
                                onClick={() => deleteHandler(e.t_id)}
                            >Delete</button>
                            <button key={e.name+i+i}
                            onClick={() => completeHandler(e.t_id)}
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
                            <li key={e+i}>{e}</li>
                            <button key={i+e+e+i}
                                    onClick={() => deleteComplete(i)}
                            >Delete</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
