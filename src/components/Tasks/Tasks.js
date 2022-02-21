import {React, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Task from '../Task/Task';
import {getAllTasks} from '../../store';
import './Tasks.css';

const Tasks = ({}) => {

    const {tasks, status, error} = useSelector(state => state['carReducer']);

    const dispatch = useDispatch();

    return (
        <div className={"carsWrap"}>
            {tasks.map(task => <Task key={task.id} task={task}/>)}

        </div>
    );
};

export {Tasks};