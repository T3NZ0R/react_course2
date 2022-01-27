import './App.css';

import Users from './Components/Users/Users'
import UserDetails from "./Components/UserDetails/UserDetails";
import Posts from "./Components/Posts/Posts"
import {useState} from "react";

import {postService} from "./services/post.service"

function App() {

    const [user, setUser] = useState(null);
    const [id, setId] = useState(null);
    const [posts, setPosts] = useState([]);


    const getUser = (user) => {
        setUser(user);
    }

    const getUserId = (id) => {
        postService.getByUserId(id).then(value => setPosts([...value]))
    }


    return (
        <div className="App">
            <div className={"top"}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>

            <div className={"bottom"}>
                {posts.length>0 && <Posts posts={posts}/>}
            </div>
        </div>
    );
}

export default App;
