import './App.css';

import {useReducer} from 'react';
import React from 'react';
import Forms from './Components/Forms/Forms'

const reduser = (state, action) => {
    switch (action.type) {
        case 'cat':
            return {...state, state.cats: state.cats.push(action.payload)};

    }
    return state;
}

const App = () => {

    const [state, dispatch] = useReducer(reduser, {cats: [], dogs: []})
    console.log(state);
    return (
        <div className={"wrap"}>
            <Forms dispatch={dispatch}/>

        </div>
    );
};

export default App;
