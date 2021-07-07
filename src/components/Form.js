import React, {useState} from "react";
import MyDAY from '../pages/MyDay';
import white from "../image/white.jpg"
import axiosInstance from "../util/axiosInstance";
import { CheckCircleTwoTone, FileExclamationTwoTone, HeartTwoTone, HeartFilled } from '@ant-design/icons';
export default function Form(props) {
    const [task, setTask] = useState('')
    const [complete, setComplete] = useState('')

    const deleteHandler = (t_id) => {
        axiosInstance.delete(`/task/delete?t_id=${t_id}`,
            {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
            .then((res) => {
                if(res.status === 200) {
                    props.setTrigger(!props.trigger)
                }
            })
    }
    const completeHandler = (t_id, isFinished) => {
        axiosInstance.put(`/task/update`, {
            t_id,
            isFinished: !isFinished,
        }, {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
            .then((res) => {
                if(res.status === 200) {
                    props.setTrigger(!props.trigger)
                }
            })

    }
    const importantHandler = (t_id, isImportant) => {
        axiosInstance.put(`/task/update`, {
            t_id,
            isImportant: !isImportant,
        }, {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
            .then((res) => {
                if(res.status === 200) {
                    props.setTrigger(!props.trigger)
                }
            })

    }

    const boxStyle = {
        listStyle: 'none',
        fontSize: '18px',
        lineHeight: '28px',
        // marginTop: '20px',
        marginLeft: '20px',
        flex: '4'
    }
    const buttonStyle ={
        marginRight: '30px',
        // marginTop: '7px',
        borderRadius: "5px",
        backgroundColor: 'cornflowerblue',
        fontSize: '14px'
        // width: "40px"
    }
    const completStyle = {
        fontSize: '18px',
        marginTop: '30px',
        marginLeft: '30px'
    }
    const titileStyle = {
        marginLeft: '10px',
        display: 'flex', 
        height: '50px', 
        width: '90px',
        margin: '20px 30px 10px 30px',
        fontSize: '22px',
        fontWeight: '700',
        alignItems: 'center',
    }
    const eventStyle = {
        display: 'flex',
        alignItems:'center',
       justifyContent:'center'
    }
    
    // console.log(props.complete)
    return(
        <div>
            <ul>
                {props.task.map((e, i) => {
                    return (
                        <div>
                            <div key = {i+e.name+i} style={eventStyle}>
                                <div onClick={() => importantHandler(e.t_id, e.isImportant)} style={{fontSize: 18}}>
                                    {e.isImportant?<HeartFilled style={{color:"#eb2f96"}}/>:<HeartTwoTone twoToneColor="#eb2f96"/>}
                                </div>
                                <li key={e.name+i}  style={boxStyle}>{e.name}</li>
                                <button key={i+e.name}
                                    onClick={() => deleteHandler(e.t_id)}
                                        style={buttonStyle}
                                >Delete</button>
                                <button key={e.name+i+i}
                                onClick={() => completeHandler(e.t_id, e.isFinished)}
                                        style={buttonStyle}
                                >Done
                                </button>
                            </div>
                            <hr/>
                        </div>
                    )
                })}
            </ul>
            {/* <hr/> */}
            <div  style={titileStyle}><CheckCircleTwoTone style={{marginRight: '10px'}}/><span>Done</span></div>
            <ul>
                {props.complete.map((e, i) => {
                    return (
                        <div>
                            <div key = {i+e+i} style={eventStyle}>
                            <div onClick={() => importantHandler(e.t_id, e.isImportant)} style={{fontSize: 18}}>
                                    {e.isImportant?<HeartFilled style={{color:"#eb2f96"}}/>:<HeartTwoTone twoToneColor="#eb2f96"/>}
                                </div>
                            {/* <CheckCircleTwoTone twoToneColor="#52c41a" /> */}
                                <li key={e+i}  style={boxStyle}>{e.name}</li>
                                <button key={i+e+e+i}
                                        onClick={() => deleteHandler(e.t_id)}
                                        style={buttonStyle}
                                >Delete</button> 
                            </div>
                            <hr/>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
