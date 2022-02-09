import React from 'react';
import {useState} from 'react';
import {useForm} from 'react-hook-form';


const Forms = ({dispatch}) => {

    const {reset, register} = useForm();

    const [form, setForm] = useState({cat: '', dog: ''});

    const formHandler = (e) => {
        const eventInfo = {...form, [e.target.name]: e.target.value};
        setForm({...form, ...eventInfo});

    }

    const getCat = (e) => {
        e.preventDefault()
        dispatch({type: 'AddCat', payload: form.cat});
        reset({ dog: null, cat: null });


    }

    const getDog = (e) => {
        e.preventDefault()
        dispatch({type: 'AddDog', payload: form.dog});
        reset({ dog: null, cat: null });

    }


    return (
        <div>

            <form>
                <label>Cat: <input type="text" /*name={"cat"}*/{...register("cat")} value={form.cat} onChange={formHandler}/></label>
                <button onClick={getCat}>Add</button>
                <label>Dog: <input type="text" {...register("dog")} value={form.dog} onChange={formHandler}/></label>
                <button onClick={getDog}>Add</button>
            </form>

        </div>
    );
};


export default Forms;



