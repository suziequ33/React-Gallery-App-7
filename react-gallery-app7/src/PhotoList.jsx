import React from 'react';
import { Link } from 'react-router-dom';
import Photo from './Photo';

const PhotoList = ({ title, data }) => {
    return (
        <div className="photo-container">
            <h2>{title} Results</h2>
            <ul >
                {data.map((photo) => (
                    <li key={photo.id}>
                     <Photo key={photo.id} photo={photo} />
                    </li>
                ))}
            </ul>
        </div>
    );

};


export default PhotoList;