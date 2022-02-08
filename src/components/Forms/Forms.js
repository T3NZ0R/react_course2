import React from 'react';
import {useState} from 'react';

const formHandler = (e) => {
    const eventInfo = {...form, [e.target.name]: e.target.value}
    setForm({...form, ...eventInfo})
}

const getFormInfo = (e) => {
    e.preventDefault()
    getFilter(form)
}


const Forms = () => {
    return (
        <div>

            <form>
                <label>Name: <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
                <button onClick={getFormInfo}>Filter</button>
            </form>



        </div>
    );
};

export default Forms;





