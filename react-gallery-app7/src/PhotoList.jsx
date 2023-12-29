import React from 'react';
import Photo from './Photo';

const PhotoList = ({ topic, data }) => {
    return (
        <div className="photo-container">
            <h2>{topic}</h2>
            <ul >
                {data.map((photo) => (
                    <Photo key={photo.id} photo={photo} />
                ))}
            </ul>
        </div>
    );

};


export default PhotoList;