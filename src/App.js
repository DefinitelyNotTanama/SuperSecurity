import * as React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

const SearchBar = () => (
  <form action="/" method="get">
      <input
          type="text"
          id="header-search"
          placeholder="Paste your link here..."
          name="s" 
      />
      <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://www.youtube.com/watch?v=bxqLsrlakK8';
              }}
        > Click here</button>
  </form>
);

function App() {

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query)

  return (
    <div className="App">
      <div className="Head">
        <h1>SSS</h1>
        <h2>Super Security Site</h2>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
