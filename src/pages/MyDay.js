import React, {useEffect, useState} from "react";
import AddTask from '../components/AddTask';
import Form from '../components/Form'
import axiosInstance from "../util/axiosInstance";
import './myDay.css'
export default function MyDay () {
    const [task, setTask] = useState([])
    const [complete, setComplete] = useState([])
    const [trigger, setTrigger] = useState(true)
    useEffect(() => {
        // axiosInstance.get(`/task/getTodayTaskByUid?u_id=${localStorage.getItem('u_id')}`,
        //     {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
        //     .then((res) => {
        //         console.log('start', res)
        //         if(res.status === 200) {
        //             setTask(res.data)
        //         }
        //     })
        // axiosInstance.get(`/task/getTasks?isFinished=1}`,
        //     {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
        //     .then((res) => {
        //         console.log('start', res)
        //         if(res.status === 200) {
        //             setComplete(res.data)
        //         }
        //     })
        axiosInstance.get(`/task/getTasks?isFinished=0&isImportant=1}`,
            {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
            .then((res) => {
                console.log('start', res)
                if(res.status === 200) {
                    setTask(res.data)
                }
            })
    }, [trigger])
    return(
        <div>
            <div className='myDay'>My Day</div>
            <AddTask task = {task} setTask={setTask} trigger={trigger} setTrigger={setTrigger} />
            <Form task = {task} setTask={setTask} complete={complete} setComplete={setComplete} setTrigger={setTrigger} trigger={trigger}/>
        </div>
    )
}
