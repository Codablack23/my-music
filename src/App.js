import React, { useState } from 'react';
import './style.css';
import Categories from './components/categories';
import Hero from './components/hero';
import SearchBar from './components/search';

export default function App() {
  const [categories, setCategories] = useState([
    {
      name: 'Movies',
      className: 'categories-1',
      movies: [
        'hello',
        'rust-eater-bisco',
        'rust-eater-bisco',
        'rust-eater-bisco',
        'rust-eater-bisco',
      ],
    },
    {
      name: 'Animes',
      className: 'categories-2',
      movies: ['hello World', 'Naruto'],
    },
  ]);
  return (
    <div className="App">
      <Hero />
      <SearchBar />
      {categories.map((c) => (
        <Categories categories={c} />
      ))}
    </div>
  );
}
