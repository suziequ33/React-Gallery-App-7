import React from 'react';

const Photo = ({ photo }) => {
    const { server, id, secret } = photo;
    const imageUrl = `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;
    return (
        <img src={imageUrl} alt={photo.title} />
    );
};

export default Photo;