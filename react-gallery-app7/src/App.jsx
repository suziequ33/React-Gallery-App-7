import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from 'react-router-dom';
import Search from './Search';
import Nav from './Nav';
import PhotoList from './PhotoList';
import apiKey from './config';

const App = () => {
  const [data, setData] = useState([]);


  const fetchData = async (query) => {
    try {
      const perPage = 24;
      const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${perPage}&format=json&nojsoncallback=1`;

      const response = await fetch(apiUrl);
      const result = await response.json();

      setData(result.photos.photo);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData('cats');
    fetchData('dogs');
    fetchData('computers');
  }, []);


  const handleSearch = (query) => {
    fetchData(query);
    return <Navigate to={`/search/${query}`} />;
  };

  return (
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/cats" />} />
          <Route path="cats" element={<PhotoList topic="Cats" data={data} />} />
          <Route path="dogs" element={<PhotoList topic="Dogs" data={data} />} />
          <Route path="computers" element={<PhotoList topic="Computers" data={data} />} />
          <Route path="search/:query" element={<Search fetchData={fetchData} handleSearch={handleSearch} />} />
        </Routes>
      </div>
    
  );

};


export default App;
