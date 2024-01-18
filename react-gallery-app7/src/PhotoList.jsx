import React, { useEffect } from 'react';
import Photo from './Photo';


const PhotoList = ({ title, photos }) => {
    console.log('Received data:', photos);
    console.log('Title:', title);

    useEffect(() => { 
        console.log(`PhotoList component mounted with title: ${title}`);
    }, [title]);

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