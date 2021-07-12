import React, {useState} from "react";
import axiosInstance from "../util/axiosInstance";
export default function AddTask(props) {
    Date.prototype.format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
    const today = new Date();
    today.setDate(today.getDate());
    const today_str = today.format("yyyy-MM-dd");
    const [task, setTask] = useState('')
    const [complete, setComplete] = useState('')
    const onChangeHandler = (e) => {
        setTask(e.target.value)
    }
    const onClickHandler = () => {
        if (task.length > 0) {
            axiosInstance.post('/task/save', {
                u_id: localStorage.getItem('u_id'),
                name: task,
                date: today_str,
                isImportant: props.isImportant,
            }, {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
                .then((res) => {
                    if (res.status === 201) {
                        props.setTrigger(!props.trigger)
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
    const inputStyle = {
        marginTop: '20px',
        marginLeft: '20px',
        paddingLeft: '20px',
        marginBottom: '20px',
        width: '500px',
        fontSize: '18px',
        height: '40px'
    }
    const buttonStyle ={
        marginTop: '20px',
        borderRadius: "0 5px 5px 0",
        backgroundColor: 'cornflowerblue',
        fontSize: '18px',
        height: '40px'
        // width: "40px"
    }
    const content = {
        justifyContent: 'center',
        display: 'flex',
        height: '50px'
    }
    return(
        <div style={content}>
            <div style={content}>
                <input value = {task} placeholder = 'Please input your plan' style={inputStyle}
                onChange={onChangeHandler}
                    onKeyPress={onEnterHandler}
                ></input>
            </div>
            <button
               style={buttonStyle}
               onClick={onClickHandler}
            >Add </button>

        </div>
    )
}
