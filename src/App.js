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
            console.log(state);
            return {...state};
        case 'AddDog':
            state.dogs.push(action.payload);
            console.log(state);
            return {...state};

    }
    return state;
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []})
    return (
        <div className={"wrap"}>
            <Forms dispatch={dispatch}/>
            <div>
                <Cats cats={state.cats}/>
                {/*<Dogs dogs={state.dogs}/>*/}
            </div>
        </div>
    );
};

export default App;
