import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import "./Posts.css";

const Posts = ({posts}) => {


    return (
        <div className={"postsTop"}>
            <h2>Posts</h2>
            <div className={"posts"}>
                {posts.map(item => <Post key={item.id} post={item}/>)}
            </div>
        </div>
    );
};

export default Posts;