import React, { useEffect, useState } from 'react';
import {  BrowserRouter as Router, Route, Routes, Navigate, NavLink, useNavigate } from 'react-router-dom';
import Search from './Search';
import Nav from './Nav';
import PhotoList from './PhotoList';
import apiKey from './config';

const App = () => {
  console.log('Rendering App component');
  const [data, setData] = useState([]);
  //const navigate = useNavigate();
  
  const fetchData = async (query) => {
    try {
      const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      setData(data.photos.photo);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData('mountains');
    fetchData('nature');
    fetchData('cats');
  }, []);

  const handleSearch = (query) => {
    console.log('Searching for;', query);
    fetchData(query);
    return <Navigate to={`/search/${query}`} />;
  };
  return (
    <div className="container">
     <Search fetchData={fetchData} handleSearch={handleSearch} />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/mountains" />} />
        <Route path="/mountains" element={<PhotoList title="Mountains" data={data} />} />
        <Route path="/nature" element={<PhotoList title="Nature" data={data} />} />
        <Route path="/cats" element={<PhotoList title="Cats" data={data} />} />
        <Route path="search/:query" element={<PhotoList title="Search" data={data} />} />
      </Routes>
    </div>
  );
};


export default App;
