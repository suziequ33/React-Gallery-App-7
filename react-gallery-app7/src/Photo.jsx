import React from 'react';

const Photo = ({ photo }) => {
    //const { server, id, secret } = photo;
    //const imageUrl = `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;
    //const imageUrl = `https://live.staticflickr.com/${server}/${id}_${secret}_s.jpg`;
    return (
        <li>
        <img src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title} />
     </li>
       
    );
};

export default Photo;