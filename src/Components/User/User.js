import React from 'react';

import './User.css';



const User = ({user}) => {
    const {id, name, username, email} = user;

    return (
        <div className={"userItemWrap"}>
            <div className={"infoWrap"}>
                <div className={"id"}>
                    {id}
                </div>

                <div className={"name"}>
                    {name}
                </div>

                <div className={"username"}>
                    {username}
                </div>

                <div className={"email"}>
                    {email}
                </div>

            </div>
        </div>
    );
};

export default User;