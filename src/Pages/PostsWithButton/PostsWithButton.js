import React, {useEffect, useState} from 'react';
import PostWithButton from "../../Components/PostWithButton/PostWithButton";
import "./PostsWithButton.css";
import {postService} from '../../services/post.service';

import {Outlet} from "react-router-dom";

const PostsWithButton = () => {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts(value));
    }, []);


    return (
        <div className={"postsWBWrap"}>
            <div className={"postsWB"}>
                <h2>Posts</h2>
                {posts.map(item => <PostWithButton key={item.id} post={item}/>)}
            </div>
            <div className={"postDetailsWrap"}>
                <Outlet/>
            </div>

        </div>
    );
};

export {PostsWithButton};