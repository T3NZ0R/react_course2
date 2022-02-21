import React from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';

import {addTask} from '../../store'


const Form = () => {

    const {handleSubmit, register, reset} = useForm();

    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(addTask({data}))
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Enter task: <input type="text" {...register('task')}/></label>
                <button>Save</button>
            </form>

        </div>
    );
};

export {Form};