import React from 'react';
import {useSelector} from 'react-redux';

const Counter = () => {

    const {tasks, completedCount} = useSelector(state => state['taskReducer']);

    return (
        <div>
            <div>
                All:{tasks.length}
            </div>
            <div>
                Completed:{completedCount}
            </div>
        </div>
    );
};

export {Counter};