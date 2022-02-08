import React from 'react';
import {useState} from 'react';

const Forms = ({dispatch}) => {

    const [cat, setCat] = useState({name:''});

    const formHandler = (e) => {
        const eventInfo = {...cat, [e.target.name]: e.target.value};
        console.log(cat);
        setCat({...cat, ...eventInfo})
    }

    const getFormInfo = (e) => {
        e.preventDefault()
        console.log(cat);
        dispatch({type: 'cat', payload: cat})
    }


    return (
        <div>

            <form>
                <label>Name: <input type="text" name={"cat"} value={cat.name} onChange={formHandler}/></label>
                <button onClick={getFormInfo}>Add</button>
            </form>

        </div>
    );
};


export default Forms;



