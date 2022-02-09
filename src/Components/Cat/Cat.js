import React from 'react';

const Cat = ({cat, dispatch}) => {
    return (
        <div>
            {cat}
            <button onClick={()=>dispatch({type:'DelCat', payload: cat})}>Delete</button>
        </div>
    );
};

export default Cat;