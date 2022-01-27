import './App.css';

import React, {useEffect, useState} from 'react';
import Users from "./Components/Users/Users";
import Form from "./Components/Form/Form";
import {userService} from "./services/user.service"



const App = () => {

    let [users, setUsers] = useState([]);
    let [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => {
            setUsers([...value])
            setFilteredUsers([...value])
        })
    }, []);

    const getFilter = (info) => {
        let arrayFilter = [...users];

        if (info.name) {
            arrayFilter = arrayFilter.filter(user => user.name.toLowerCase().includes(info.name))
        }
        if (info.username) {
            arrayFilter = arrayFilter.filter(user => user.username.toLowerCase().includes(info.username))
        }
        if (info.email) {
            arrayFilter = arrayFilter.filter(user => user.email.toLowerCase().includes(info.email))
        }

        setFilteredUsers(arrayFilter);
    }


    return (
        <div>
            <Form getFilter={getFilter}/>
            <Users users={filteredUsers}/>
        </div>
    );
};

export default App;
