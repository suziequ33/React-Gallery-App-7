import React from 'react';

const Photo = () => {
    const imageUrl = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

    return (
        <li>
            <img src={imageUrl} alt={photo.title} />
        </li>
    );
};

export default Photo;