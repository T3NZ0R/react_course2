import React, {useEffect, useState} from 'react';
import User from "../User/User";
import "./Users.css";


const Users = ({getUser}) => {

let [users, setUsers] = useState([]);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => setUsers(value));
}, []);


    return (
        <div className={"usersWrap"}>
            <div>
                <h2>Users</h2>
                {users.map(item=> <User key={item.id} user={item} getUser={getUser}/>)}
            </div>
        </div>
    );
};

export default Users;
