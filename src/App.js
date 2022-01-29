import ReactDom from "react-dom";
import {Route, Routes, Link} from "react-router-dom";

import './App.css';
import Users from './Pages/Users'
import Posts from './Pages/Posts'




function App() {

    return (
        <div className="App">
            <div className={"links"}>
                <button><Link to={'/users'}>Users</Link></button>
                <button><Link to={'/posts'}>Posts</Link></button>
            </div>
            <Routes>
                <Route path={'/users'} element={<Users/>}/>
                <Route path={'/posts'} element={<Posts/>}/>
            </Routes>
        </div>
    );
}

export default App;
