import React, { useEffect, useState } from 'react';
import {  Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Search from './Search';
import Nav from './Nav';
import PhotoList from './PhotoList';
import apiKey from './config';
import './index.css';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('mountains');

  const fetchData = async (query) => {
    try {
      const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
      
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log('Featched data:', data);

      setPhotos(data.photos.photo);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  //const handleSearch = (userQuery) => {
    //setQuery(userQuery);
    //fetchData(userQuery);
 // };

  //useEffect(() => {
    //fetchData('mountains');
    //fetchData('nature');
    //fetchData('cats');
  //}, []);

  return (
    <div className="container">
      <Search fetchData={fetchData} />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/mountains" />} />
        <Route path="/mountains" element={<PhotoList title="Mountains" photos={photos} fetchData={fetchData} />}
        />
        <Route
          path="/nature" element={<PhotoList title="Nature" photos={photos} fetchData={fetchData} />}
        />
        <Route path="/cats" element={<PhotoList title="Cats" photos={photos} fetchData={fetchData} />} />
        <Route path="search/:query" element={<PhotoList title={`Search: ${query}`} photos={photos} fetchData={fetchData} />} />
        <Route path="*" element={<Navigate to="/mountains" />} />
      </Routes>
    </div>
  );
};


export default App;
