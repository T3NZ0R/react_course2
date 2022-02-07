import ReactDom from "react-dom";
import {Route, Routes, Link, Navigate} from "react-router-dom";

import './App.css';
import {Users, UserDetails, Posts, PostsWithButton, PostsDetails, Comments, Home, Albums, Photos} from './Pages';

function App() {

    return (
        <div className="App">
            <div className={"links"}>
                <button><Link to={'/users'}>Users</Link></button>
                <button><Link to={'/posts'}>Posts</Link></button>
            </div>
            <Routes>

                <Route path={'/'} element={<Home/>}/>
                <Route index element={<Navigate to={'users'}/>}/>

                <Route path={'users'} element={<Users/>}>

                    <Route path={`:id`} element={<UserDetails/>}>
                        <Route path={'posts'} element={<Posts/>}/>
                    </Route>

                    <Route path={':id/albums'} element={<Albums/>}>
                        <Route path={':albumId/photos'} element={<Photos/>}/>
                    </Route>

                </Route>

                <Route path={'posts'} element={<PostsWithButton/>}>

                    <Route path={`:id`} element={<PostsDetails/>}>
                        <Route path={'comments'} element={<Comments/>}/>
                    </Route>

                </Route>

            </Routes>
        </div>
    );
}

export default App;
