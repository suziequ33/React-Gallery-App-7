import React from 'react';

const Photo = ({ photo }) => {
    const imageUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
    return (
        <img src={imageUrl} alt={photo.title} />
    );
};

export default Photo;