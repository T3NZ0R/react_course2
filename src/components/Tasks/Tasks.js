import {React} from 'react';
import {useSelector} from 'react-redux';

import Task from '../Task/Task';
import './Tasks.css';

const Tasks = () => {

    const {tasks} = useSelector(state => state['taskReducer']);

    return (
        <div className={"tasksWrap"}>
            {tasks.map(task => <Task key={task.id} task={task}/>)}
        </div>
    );
};

export {Tasks};