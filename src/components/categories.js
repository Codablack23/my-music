import React from 'react';
import Movies from './movies';
export default function Categories({ categories }) {
  return (
    <div className="categories">
      <h1>{categories.name}</h1>
    </div>
  );
}
