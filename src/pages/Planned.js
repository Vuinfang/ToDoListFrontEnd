import React, {useState} from "react";

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
    return(
        <div>
            <input value = {task} placeholder = 'Please input'
                   onChange={onChangeHandler}
                   onKeyPress={onEnterHandler}
            ></input>
            <button
                onClick={onClickHandler}
            >Submit</button>

        </div>
    )
}
