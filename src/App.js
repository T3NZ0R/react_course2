import ReactDom from "react-dom";
import {Route, Routes, Link} from "react-router-dom";

import './App.css';
import {Users, UserDetails, Posts, PostsWithButton, PostsDetails, Comments, Home} from './Pages';

function App() {

    return (
        <div className="App">
            <div className={"links"}>
                <button><Link to={'/users'}>Users</Link></button>
                <button><Link to={'/posts'}>Posts</Link></button>
            </div>
            <Routes>
            <Route path={'/'} element={<Home/>}/>

                <Route path={'/users'} element={<Users/>}>
                    <Route path={`/users/:id`} element={<UserDetails/>}>
                        <Route path={'/users/:id/posts'} element={<Posts/>}/>
                    </Route>
                </Route>

                <Route path={'/posts'} element={<PostsWithButton/>}>
                    <Route path={`/posts/:id`} element={<PostsDetails/>}>
                        <Route path={'/posts/:id/comments'} element={<Comments/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
