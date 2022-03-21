import React from 'react';
import './style.css';
import Categories from './components/categories';
import Hero from './components/hero';

export default function App() {
  return (
    <div className="App">
      <Hero />

      <Categories categories={{ name: 'Movie' }} />
    </div>
  );
}
