import React from 'react';

import './PostsDetails.css';

import {Link, useLocation, useParams, Outlet} from 'react-router-dom';

const PostsDetails = () => {

    let {state: post} = useLocation();

    const {title, body, id} = post;

    return (
        <div className={"postDetailsTop"}>
            <h2>Posts Details</h2>
            <div className={"postDetails"}>
                <h4>Id: {id}</h4>
                <h4>Title: {title}</h4>
                <h4>Body: {body}</h4>

                <div className={"buttonWrap"}>
                    <button><Link to={'comments'} state={post}>Get Comments</Link></button>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export {PostsDetails};