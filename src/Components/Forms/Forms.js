import React from 'react';
import {useState} from 'react';

const Forms = ({dispatch}) => {
    return (
        <div>

            <form>
                <label>Name: <input type="text" name={"cat"} value={cat.value}/></label>
                <button onClick={()=>dispatch({type:'cat', payload: cat.value})}>Add</button>
            </form>



        </div>
    );
};

export default Forms;





