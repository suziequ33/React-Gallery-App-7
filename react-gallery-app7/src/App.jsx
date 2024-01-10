import React, { useEffect, useState } from 'react';
import {  Route, Routes, Navigate } from 'react-router-dom';
import Search from './Search';
import Nav from './Nav';
import PhotoList from './PhotoList';
import apiKey from './config';
import './index.css';

const App = () => {

  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchData('mountains');
    fetchData('nature');
    fetchData('cats');
  }, []);

  const fetchData = async (searchQuery) => {
    try {
      if (searchQuery.trim() !== '') {
      //const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
      const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchQuery}&per_page=24&format=json&nojsoncallback=1`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      console.log('Complete data object:', data);

      setPhotos(data.photos ? data.photos.photo : []);
      console.log('Data fetched and set:', data.photos ? data.photos.photo : []);
      } else {
        setPhotos([]);
        console.log('Empty search query. Data set to empty array.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const handleSearch = (query) => {
    console.log('Searching for:', query);
    fetchData(query);
    setQuery('');
 
  };


  return (
      <div className="container">
        <Search fetchData={handleSearch} />
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/mountains" />} />
          <Route path="/mountains" element={<PhotoList title="Mountains" data={photos} />} />
          <Route path="/nature" element={<PhotoList title="Nature" data={photos} />} />
          <Route path="/cats" element={<PhotoList title="Cats" data={photos} />} />
          <Route path="search/:query" element={<PhotoList title={`Search: ${query}`} data={photos} />} />
        </Routes>
        </div >
  );
};


export default App;
