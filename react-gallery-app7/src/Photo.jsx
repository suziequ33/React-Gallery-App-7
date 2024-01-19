import React from 'react';

const Photo = ({ photo }) => {
    return (
        <img src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title} />
    );
};

export default Photo;