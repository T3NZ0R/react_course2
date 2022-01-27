import React from 'react';

import './User.css';



const User = ({user, getUser}) => {
const {id, name} = user;

    return (
        <div className={"userItemWrap"}>
<div className={"infoWrap"}>
            <div className={"id"}>
                {id}
            </div>

            <div>
                {name}
            </div>
</div>
            <button onClick={()=> {getUser(user)}}>Get details</button>
        </div>
    );
};

export default User;