import React, { useEffect } from 'react';
import Photo from './Photo';

//PhotoList component
const PhotoList = ({ title, photos, fetchData }) => {
    useEffect(() => {
        if (!photos || photos.length === 0) {
            fetchData(title.toLowerCase());
        }
    }, [title, photos, fetchData]);
//useEffect to fetch data if photos are not available

//Render JSX
    return (
        <div className="photo-container">
            <h2>{title}</h2>
            <ul>
                {photos && photos.length > 0 ? (
                    photos.map((photo) => (
                        <li key={photo.id}>
                            <Photo photo={photo} />
                        </li>

                    ))

                ) : (
                    <li className="not-found">
                        <h3>No Results Found</h3>
                        <p>You search did not return any results. Please try again.</p>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default PhotoList;