import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Handle search logic here, e.g., make an API request
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
