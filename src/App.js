import React from 'react';

import './App.css';
import {Tasks, Form, Counter} from './components';

const App = () => {

    return (
        <div>
            <Counter/>
            <Form />
            <Tasks />
        </div>
    );
};

export default App;
