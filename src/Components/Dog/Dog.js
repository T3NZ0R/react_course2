import React from 'react';

const Dog = ({dog, dispatch}) => {
    return (
        <div>
            {dog}
            <button onClick={()=>dispatch({type:'DelDog', payload: dog})}>Delete</button>
        </div>
    );
};

export default Dog;