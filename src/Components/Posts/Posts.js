import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import "./Posts.css";

const Posts = ({id}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
            .then(value => value.json())
            .then(value => setPosts(value));
    }, [id]);

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