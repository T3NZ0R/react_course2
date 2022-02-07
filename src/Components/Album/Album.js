import React from 'react';
import {Link} from "react-router-dom";
import './Album.css';


const Album = ({album}) => {

    const {id, title} = album;

    return (
        <div className={"albumWrap"}>
            <div className={"albumId"}>{id}</div>
            <div className={"albumTitle"}>{title}</div>
            <button><Link to={`${id}/photos`}>Get Photos</Link></button>
        </div>
    );
};

export default Album;