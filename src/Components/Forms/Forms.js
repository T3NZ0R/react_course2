import React from 'react';
import {useState} from 'react';

const Forms = ({dispatch}) => {

    const [cat, setCat] = useState({name:''});

    const formHandler = (e) => {
        const eventInfo = {...cat, [e.target.name]: e.target.value}
        setCat({...cat, ...eventInfo})
    }

    return (
        <div>

            <form>
                <label>Name: <input type="text" name={"cat"} value={cat.name} onChange={formHandler}/></label>
                <button onClick={() => dispatch({type: 'cat', payload: cat})}>Add</button>
            </form>

        </div>
    );
};


export default Forms;



