import React from 'react';
import Cat from '../Cat/Cat'
import { v4 as uuid } from 'uuid';


const Dogs = ({dogs}) => {
    return (
        <div>
            {dogs.map(item => <Cat key={uuid()} cat={item}/>)}
        </div>
    );
};

export default Dogs;