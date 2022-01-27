import React from 'react';
import "./Post.css";
const Post = ({post}) => {
const {title, body, id} = post;
    return (
        <div className={"post"}>
            <h4>Id: {id}</h4>
            <h4>Title: {title}</h4>
            <h4>Body: {body}</h4>
        </div>
    );
};

export default Post;