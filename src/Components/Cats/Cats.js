import React from 'react';
import Cat from '../Cat/Cat'
import { v4 as uuid } from 'uuid';

const Cats = ({cats, dispatch}) => {
    return (
        <div>
            {cats.map(item => <Cat key={uuid()} cat={item} dispatch={dispatch}/>)}
        </div>
    );
};

export default Cats;