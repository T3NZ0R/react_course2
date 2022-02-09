import React from 'react';
import Dog from '../Dog/Dog'
import { v4 as uuid } from 'uuid';


const Dogs = ({dogs, dispatch}) => {
    return (
        <div>
            {dogs.map(item => <Dog key={uuid()} dog={item} dispatch={dispatch}/>)}
        </div>
    );
};

export default Dogs;