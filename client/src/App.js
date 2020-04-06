import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Character } from './components/Character';
import { SearchBar } from './components/SearchBar';
import { Home } from './components/Home';
import { Creator } from './components/Creator';
import { Comic } from './components/Comic';
function App() {
  return (
    <div style={{ background: 'black', color: 'white' }}>
      <BrowserRouter>
        <SearchBar />
        <Route exact path="/" component={Home} />
        <Route path="/character/:id" component={Character} />
        <Route path="/creator/:id" component={Creator} />
        <Route path="/comic/:id" component={Comic} />
      </BrowserRouter>
    </div>
  );
}

export default App;
