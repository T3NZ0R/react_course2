import React, {useEffect, useState} from 'react';

import Album from "../../Components/Album/Album";
import {albumService} from '../../services/album.service';

import {useLocation, useParams, Outlet} from "react-router-dom";

import './Albums.css'

const Albums = () => {

    let {id} = useParams();

    let [albums, setAlbums] = useState([]);

    useEffect(()=>{
        albumService.getByUserId(id).then(value => setAlbums(value));
    },[id]);


    return (
        <div className={"albumsWrap"}>
            <h2>Albums</h2>
            <div>
                {albums.map(item => <Album key={item.id} album={item}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export {Albums};