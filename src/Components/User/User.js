import React from 'react';
import {Link} from "react-router-dom";


import './User.css';


const User = ({user}) => {
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
            <button><Link to={`${id}`} state={user}>Get details</Link></button>
            <button><Link to={`${id}/albums`} state={user}>Get Albums</Link></button>
        </div>
    );
};

export default User;