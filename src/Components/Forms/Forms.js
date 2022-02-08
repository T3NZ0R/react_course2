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
        e.preventDefault();
        dispatch({type: 'cat', payload: cat.name});
    }


    return (
        <div>

            <form>
                <label>Cat: <input type="text" name={"name"} value={cat.name} onChange={formHandler}/></label>
                <button onClick={getFormInfo}>Add</button>
            </form>

        </div>
    );
};


export default Forms;



