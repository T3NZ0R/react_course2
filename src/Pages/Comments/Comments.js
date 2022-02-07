import React, {useEffect, useState} from 'react';

import './Comments.css';
import Comment from '../../Components/Comment/Comment'
import {commentsService} from '../../services/comment.service';

import {useLocation, useParams} from "react-router-dom";

const Comments = () => {

    let {id} = useParams();


    let [comments, setComments] = useState([]);
    useEffect(() => {
        commentsService.getByPostId(id).then(value => setComments(value));
    }, []);

    return (
        <div className={"commentsTop"}>
            <h2>Comments</h2>
            <div className={"comments"}>
                {comments.map(item => <Comment key={item.id} comment={item}/>)}
            </div>
        </div>
    );
};

export {Comments};