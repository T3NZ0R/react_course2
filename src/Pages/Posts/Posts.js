import React, {useEffect, useState} from 'react';

import Post from "../../Components/Post/Post";
import {postService} from '../../services/post.service';
import "./Posts.css";

import {useLocation, useParams} from "react-router-dom";

const Posts = () => {

    let {state: user} = useLocation();

    const {id} = user;

    let [posts, setPosts] = useState([]);

    useEffect(()=>{
        postService.getByUserId(id).then(value => setPosts(value));
    }, []);


    return (
        <div className={"postsTop"}>
            <h2>Posts</h2>
            <div className={"posts"}>
                {posts.map(item => <Post key={item.id} post={item}/>)}
            </div>
        </div>
    );
};

export {Posts};