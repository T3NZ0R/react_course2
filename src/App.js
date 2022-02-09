import './App.css';

import {useReducer} from 'react';
import React from 'react';
import Forms from './Components/Forms/Forms';
import Cats from './Components/Cats/Cats';
import Dogs from './Components/Dogs/Dogs';


const reducer = (state, action) => {
    switch (action.type) {
        case 'AddCat':
            state.cats.push(action.payload);
            return {...state};
        case 'AddDog':
            state.dogs.push(action.payload);
            return {...state};
        case 'DelCat':
            state.cats = state.cats.filter(cat=>!cat.includes(action.payload));
            return {...state};
        case 'DelDog':
            state.dogs = state.dogs.filter(dog=>!dog.includes(action.payload));
            return {...state};

    }
    return {...state};
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []})
    return (
        <div className={"wrap"}>
            <Forms dispatch={dispatch}/>
            <div className={"itemWrap"}>
                <Cats cats={state.cats} dispatch={dispatch}/>
                <Dogs dogs={state.dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
};

export default App;
