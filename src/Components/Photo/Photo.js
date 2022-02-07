import React from 'react';
import './Photo.css'

const Photo = ({photo}) => {

    const {id, title, thumbnailUrl} = photo;
    return (
        <div className={'photoWrap'}>
            <div>
                <div className={"photoId"}>{id}</div>
                <div className={"photoTitle"}>{title}</div>
            </div>

            <img src={thumbnailUrl} alt=""/>
        </div>
    );
};

export default Photo;