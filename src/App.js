import './App.css';

import {useReducer} from 'react';
import React from 'react';
import Forms from './Components/Forms/Forms'

const reduser = (state, action) => {
    switch (action.type) {
        case 'cat':

            return ;

    }
    return state;
}

const App = () => {

    const [state, dispatch] = useReducer(reduser, {cats: [], dogs: []})
    return (
        <div className={"wrap"}>
            <Forms dispatch={dispatch}/>

        </div>
    );
};

export default App;
