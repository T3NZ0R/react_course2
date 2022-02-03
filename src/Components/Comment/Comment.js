import React from 'react';

import "./Comment.css";

const Comment = ({comment}) => {
const {id, name, email, body} = comment

    return (
        <div className={"comment"}>

            <h4>ID: {id}</h4>
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
            <h4>Body: {body}</h4>

        </div>
    );
};

export default Comment;