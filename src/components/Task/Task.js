import React from 'react';
import './Task.css';
import {deleteTask} from '../../store';
import {useDispatch} from 'react-redux';



const Task = ({task: {id, task}}) => {

    const dispatch = useDispatch();

    return (
        <div className={"carWrap"}>
            <div>
                <div>Model: {task}</div>
            </div>
            <button onClick={()=>dispatch(deleteTask({id}))}>Delete</button>
        </div>
    );
};

export default Task;