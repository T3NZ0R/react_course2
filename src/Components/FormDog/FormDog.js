import React from 'react';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import './FormDog.css'


const FormDog = ({dispatch}) => {

    const {reset, register, handleSubmit} = useForm();

    const [form, setForm] = useState({dog: ''});

    const formHandler = (e) => {
        const eventInfo = {...form, dog: e.target.value};
        setForm({...form, ...eventInfo});


    }

    const getDog = () => {

        dispatch({type: 'AddDog', payload: form.dog});
        reset({dog: ''});
        form.dog = '';
    }


    return (
        <div className={"formsWrap"}>

            <form onSubmit={handleSubmit(getDog)}>
                <label>Dog: <input{...register("dog")} value={form.dog} onChange={formHandler}/></label>
                <button>Add</button>
            </form>

        </div>
    );
};


export default FormDog;



