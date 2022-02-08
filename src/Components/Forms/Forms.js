import React from 'react';
import {useState} from 'react';

const Forms = ({dispatch}) => {

    const [form, setForm] = useState({cat:'', dog:''});

    const formHandler = (e) => {
        const eventInfo = {...form, [e.target.name]: e.target.value};
        setForm({...form, ...eventInfo})
    }

    const getCat = (e) => {
        e.preventDefault();
        dispatch({type: 'AddCat', payload: form.cat});
    }

    const getDog = (e) => {
        e.preventDefault();
        dispatch({type: 'AddDog', payload: form.dog});
    }


    return (
        <div>

            <form>
                <label>Cat: <input type="text" name={"cat"} value={form.cat} onChange={formHandler}/></label>
                <button onClick={getCat}>Add</button>
                <label>Dog: <input type="text" name={"dog"} value={form.dog} onChange={formHandler}/></label>
                <button onClick={getDog}>Add</button>
            </form>

        </div>
    );
};


export default Forms;



