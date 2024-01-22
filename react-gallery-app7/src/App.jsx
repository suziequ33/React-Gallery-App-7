import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Search from './Search';
import Nav from './Nav';
import PhotoList from './PhotoList';
import apiKey from './config';
import './index.css';

const App = () => {
  //State for storing fetched photos and search query
  const [photos, setPhotos] = useState([]);
  const [mountainsPhotos, setMountainsPhotos] = useState([]);
  const [naturePhotos, setNaturePhotos] = useState([]);
  const [catPhotos, setCatPhotos] = useState([]);
  const [query, setQuery] = useState('');

  //Function to fetch data from Flickr API
  const fetchData = async (query) => {
    try {
      const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log('Data from API', data);

      //Check if the query matches a static route
      if (query === 'mountains') {
        setMountainsPhotos(data.photos.photo);
      } else if  (query === 'nature') {
        setNaturePhotos(data.photos.photo);
      } else if  (query === 'cats') {
        setCatPhotos(data.photos.photo);
      } else {
        setPhotos(data.photos.photo);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  //Function to handle search
  const handleSearch = (userQuery) => {
    setQuery(userQuery);
    fetchData(userQuery);
  };

  //useEffect to fetch data for topics
  useEffect(() => {
    fetchData('mountains');
    fetchData('nature');
    fetchData('cats');
  }, []);
  //Render JSX
  return (
    <div className="container">
      <Search fetchData={handleSearch} />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/mountains" />} />
        <Route path="/mountains" element={<PhotoList title="Mountains" photos={mountainsPhotos} fetchData={fetchData}  />} />
        <Route path="/nature" element={<PhotoList title="Nature" photos={naturePhotos} fetchData={fetchData} />} />
        <Route path="/cats" element={<PhotoList title="Cats" photos={catPhotos} fetchData={fetchData}  />} />
        <Route path="search/:query" element={<PhotoList title="Search" photos={photos} fetchData={fetchData} />} />
        <Route path="*" element={<Navigate to="/mountains" />} />
      </Routes>
    </div>
  );
};


export default App;
