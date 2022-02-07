import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {photoService} from '../../services/photo.service';
import Photo from "../../Components/Photo/Photo";

import './Photos.css';


const Photos = () => {

    let {albumId} = useParams();

    let [photos, setPhotos] = useState([]);

    useEffect(()=>{
        photoService.getByAlbumId(albumId).then(value => setPhotos(value));
    }, [albumId]);



    return (
        <div >
            <h2>Photos</h2>
            <div className={'photosWrap'}>
                {photos.map(item => <Photo key={item.id} photo={item}/>)}
            </div>
        </div>
    );
};

export {Photos};