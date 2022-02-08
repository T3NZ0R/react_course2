import './App.css';

import {useReducer} from 'react';
import React from 'react';

const reduser = (state, action) => {
    switch (action.type) {
        case 'inc1':
            return {...state, count1: state.count1 + 1};
        case 'dec1':
            return {...state, count1: state.count1 - 1};
        case 'reset1':
            return {...state, count1: action.payload};

        case 'inc2':
            return {...state, count2: state.count2 + 1};
        case 'dec2':
            return {...state, count2: state.count2 - 1};
        case 'reset2':
            return {...state, count2: action.payload};

        case 'inc3':
            return {...state, count3: state.count3 + 1};
        case 'dec3':
            return {...state, count3: state.count3 - 1};
        case 'reset3':
            return {...state, count3: action.payload};
    }
    return state;
}

const App = () => {

    const [state, dispatch] = useReducer(reduser, {count1: 1, count2: 2, count3: 3})
    return (
        <div className={"wrap"}>
            <div className={"counter"}>
                <div >Counter №1 = {state.count1}</div>
                <button onClick={() => dispatch({type: 'inc1'})}>Increment</button>
                <button onClick={() => dispatch({type: 'dec1'})}>Decrement</button>
                <button onClick={() => dispatch({type: 'reset1', payload: 1})}>Reset</button>
            </div>

            <div className={"counter"}>
                <div>Counter №2 = {state.count2}</div>
                <button onClick={() => dispatch({type: 'inc2'})}>Increment</button>
                <button onClick={() => dispatch({type: 'dec2'})}>Decrement</button>
                <button onClick={() => dispatch({type: 'reset2', payload: 2})}>Reset</button>
            </div>

            <div className={"counter"}>
                <div>Counter №3 = {state.count3}</div>
                <button onClick={() => dispatch({type: 'inc3'})}>Increment</button>
                <button onClick={() => dispatch({type: 'dec3'})}>Decrement</button>
                <button onClick={() => dispatch({type: 'reset3', payload: 3})}>Reset</button>
            </div>

        </div>
    );
};

export default App;
