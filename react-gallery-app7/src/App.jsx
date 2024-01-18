import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Search from './Search';
import Nav from './Nav';
import PhotoList from './PhotoList';
import apiKey from './config';
import './index.css';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const fetchData = async (query) => {
    try {

      const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
      console.log('Fetching data form:', query);

      const response = await fetch(apiUrl);
      //console.log('Resoponse:', response);

      const data = await response.json();
      console.log('Featched data:', data);

      setPhotos(data.photos.photo);
      navigate(`/search/${query}`);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData('mountains');
    fetchData('nature');
    fetchData('cats');
  }, []);

  //const handleSearch = (e) => {
   // e.preventDefault();
    //fetchData(query);
    //setQuery('');
    //console.log('Search executed:', query);
 // };
  return (
    <div className="container">
      <Search fetchData={fetchData} />
      <Nav fetchData={fetchData} />
      <Routes>
        <Route path="/" element={<Navigate to="/mountains" />} />
        <Route path="/mountains" element={<PhotoList title="Mountains" photos={photos} />} />
        <Route path="/nature" element={<PhotoList title="Nature" photos={photos} />} />
        <Route path="/cats" element={<PhotoList title="Cats" photos={photos} />} />
        <Route path="search/:query" element={<PhotoList title={`Search: ${query}`} photos={photos}  />} />
        <Route path="*" element={<Navigate to="/mountains" />} />
      </Routes>
    </div >
  );
};


export default App;
