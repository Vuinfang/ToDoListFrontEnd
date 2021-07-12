import React, {useEffect, useState} from "react";
import AddTask from '../components/AddTask';
import Form from '../components/Form'
import axiosInstance from "../util/axiosInstance";
import {ClockCircleTwoTone} from '@ant-design/icons';
export default function Container(props) {
    const [task, setTask] = useState([])
    const [complete, setComplete] = useState([])
    const [trigger, setTrigger] = useState(true)
    useEffect(() => {
        axiosInstance.get(`/task/getTodayTask?isFinished=0${props.isImportant?'&isImportant=1':''}`,
            {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
            .then((res) => {
                if(res.status === 200) {
                    setTask(res.data)
                }
            })
        axiosInstance.get(`/task/getTodayTask?isFinished=1${props.isImportant?'&isImportant=1':''}`,
            {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
            .then((res) => {
                if(res.status === 200) {
                    setComplete(res.data)
                }
            })
    }, [trigger])

    // const titileStyle = {
    //     marginLeft: '10px',
    //     display: 'flex',
    //     height: '50px',
    //     width: '90px',
    //     margin: '20px 30px 10px 30px',
    //     fontSize: '22px',
    //     fontWeight: '700',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    // }
    const myDayStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        // justifyContent: 'flex-start',
    }
    return(
        <div className='myDay' style={myDayStyle}>
            {props.children}
            <div style={{width: '720px', margin: '0 auto'}}>
                <AddTask task={task} isImportant={props.isImportant}
                setTask={setTask} trigger={trigger} setTrigger={setTrigger}/>
            </div>
            <div>
                <Form
                style={{display: 'flex'}} task={task} setTask={setTask}
                complete={complete} setComplete={setComplete}
                setTrigger={setTrigger} trigger={trigger}/>
            </div>
        </div>
    )
}
