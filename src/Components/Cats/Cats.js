import React from 'react';
import Cat from '../Cat/Cat'

const Cats = (cats) => {
    return (
        <div>
            {cats.map(item=> <Cat cat={item}/>)}
        </div>
    );
};

export default Cats;