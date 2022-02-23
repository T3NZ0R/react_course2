import React from 'react';
import {deleteTask, completeTask} from '../../store';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

import './Task.css';


const Task = ({task: {id, task}}) => {

    const dispatch = useDispatch();

    const [isActive, setActive] = useState("false");

    const handleToggle = (e) => {
        setActive(!isActive);
        dispatch(completeTask({
            data: {
                id: id,
                status: e.target.checked
            }
        }));
    };


    return (
        <div className={"taskWrap"}>
            <form onChange={handleToggle}>
                <input type="checkbox"
                       name={"task"}
                />
            </form>
            <div className={!isActive ? 'line' : 'none'}>Task:{task}</div>

            <button onClick={() => dispatch(deleteTask({id}))}>Delete</button>
        </div>
    );
};

export default Task;