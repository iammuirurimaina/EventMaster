import React from 'react';
import SearchBar from './SearchBar';
import './Home.css'

function Hero() {
  return (
    <div className="relative hero">
    <img
      src='https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      alt='concert'
      

    />
    
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
   
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to EventMaster</h1>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8">Find and buy tickets for your favorite events</p>
      <SearchBar />
    </div>
    </div>
  );
  }
  export default Hero




