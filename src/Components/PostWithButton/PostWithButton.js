import React from 'react';
import "./PostWithButton.css";
import {Link} from 'react-router-dom';
const PostWithButton = ({post}) => {
const {title, body, id} = post;
    return (
        <div className={"postWB"}>
            <h4>Id: {id}</h4>
            <h4>Title: {title}</h4>
            <h4>Body: {body}</h4>
            <div className={"postButton"}>
                <button><Link to={`${id}`} state={post}>Get Details</Link></button>
            </div>
        </div>
    );
};

export default PostWithButton;