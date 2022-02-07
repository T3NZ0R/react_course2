import React, {useEffect, useState} from 'react';
import User from "../../Components/User/User";
import "./Users.css";
import {userService} from "../../services/user.service";
import {Outlet} from "react-router-dom";


const Users = () => {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value))
    }, []);

    return (
        <div className={"usersWrap"}>
            <div>
                <h2>Users</h2>
                {users.map(item => <User key={item.id} user={item}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export {Users};
