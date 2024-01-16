import React from 'react';
import Photo from './Photo';
//import { Link } from 'react-router-dom';

const PhotoList = ({ title, data }) => {
    console.log('Data in PhotoList:', data);
    console.log('Title in PhotoList:', title);
    console.log('Data in PhotoList:', data);
    return (
        <div className="photo-container">
            <h2>{title} Results</h2>
            {data.length > 0 ? (
                <ul >
                    {data.map((photo) => (
                        <li key={photo.id}>
                            <Photo key={photo.id} photo={photo} />
                        </li>
                    ))}
                </ul>
            ) : (
                <li className="not-found">
                    <h3>No Results Found</h3>
                    <p>You search did not return any results. Please try again.</p>
                </li>
            )}
        </div>
    );

};


export default PhotoList;