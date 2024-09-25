import React, { useState } from 'react';
import './App.css';
import userData from './data.jsx';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      return;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const results = userData.filter(user => user.Name.toLowerCase() === lowerCaseSearchTerm);
    setSearchResults(results);
    setNoResults(results.length === 0);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="app">
      <h1>WiFi Password</h1>
      <input 
        type="text" className="search-input" 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
        onKeyDown={handleKeyDown}
        placeholder="Enter your name" 
        required />
      <button onClick={handleSearch} type='submit' className="search-button">Search</button>
      <ul className="search-results">
        {searchResults.length > 0 ? (
          searchResults.map(user => (
            <li key={user.id_BOIGuest} className="search-result">
              <p>ID: {user.id_BOIGuest}</p>
              <p>Password: {user.Password}</p>
            </li>
          ))
        ) : (
          noResults && <li className="search-result">User not found</li>
        )}
      </ul>
    </div>
  );
}

export default App;