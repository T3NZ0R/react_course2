import React, {useEffect, useState} from 'react';
import User from "../User/User";
import "./Users.css";


const Users = ({users}) => {

    return (
        <div className={"usersWrap"}>
            <div>
                {users.map(item => <User key={item.id} user={item}/>)}
            </div>
        </div>
    );
};

export default Users;