import React from 'react';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import './FormCat.css'


const FormCat = ({dispatch}) => {

    const {reset, register, handleSubmit} = useForm();

    const [form, setForm] = useState({cat: ''});

    const formHandler = (e) => {
        const eventInfo = {...form, cat: e.target.value};
        setForm({...form, ...eventInfo});


    }

    const getCat = () => {

        dispatch({type: 'AddCat', payload: form.cat});
        reset({cat: ''});
        form.cat = '';
    }




    return (
        <div className={"formsWrap"}>

            <form onSubmit={handleSubmit(getCat)}>
                <label>Cat: <input{...register("cat")} value={form.cat} onChange={formHandler}/></label>
                <button>Add</button>
            </form>

        </div>
    );
};


export default FormCat;



