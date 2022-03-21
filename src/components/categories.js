import React from 'react';
import Movies from './movies';

export default function Categories({ categories }) {
  return (
    <div className={categories.className}>
      <h1 className="category-name">{categories.name}</h1>
      <div className="all-movies">
        {categories.movies.map((c) => (
          <Movies movie={c} />
        ))}
      </div>
    </div>
  );
}
