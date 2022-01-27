import './App.css';

import Users from './Components/Users/Users'
import UserDetails from "./Components/UserDetails/UserDetails";
import Posts from "./Components/Posts/Posts"
import {useState} from "react";

function App() {

    const [user, setUser] = useState(null);
    const [id, setId] = useState(null);

    const getUser = (user) => {
        setUser(user);
    }

    const getUserId = (id) => {
        setId(id);
    }


    return (
        <div className="App">
            <div className={"top"}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>

            <div className={"bottom"}>
                {id && <Posts id={id}/>}
            </div>
        </div>
    );
}

export default App;
