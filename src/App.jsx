import React, { useState } from 'react';
import './App.css';
import userData from './data.jsx';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = userData.filter(user => user.Name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  };


  return (
    <div className="app">
      <h1>WiFi Password</h1>
      <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Enter your name" className="search-input" />
      <button onClick={handleSearch} className="search-button">Search</button>
      <ul className="search-results">
        {searchResults.map(user => (
          <li key={user.id_BOIGuest} className="search-result">
            <p>ID: {user.id_BOIGuest}</p>
            <p>Password: {user.Password}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;