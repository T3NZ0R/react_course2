import './App.css';

import {useReducer} from 'react';
import React from 'react';

const reduser = (state, action) => {
    switch (action.type) {

    }
    return state;
}

const App = () => {

    const [state, dispatch] = useReducer(reduser, {cats:[], dogs:[]})
    return (
        <div className={"wrap"}>


        </div>
    );
};

export default App;
