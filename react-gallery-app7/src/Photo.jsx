import React from 'react';

const Photo = ({ photo }) => {
    if (!photo || !photo.server || !photo.id || !photo.secret) {
        return null;
    };
    const imageUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
    return (
        <img src={imageUrl} alt={photo.title} />
    );
};

export default Photo;