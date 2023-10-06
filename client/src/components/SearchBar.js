import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = () => {
    // Handle search logic here, e.g., make an API request
    console.log(`Searching for: ${searchTerm}`);
    console.log(`Category: ${category}`);
    // Make an API request with searchTerm and category
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Search for events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400 w-64"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400 w-32"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
