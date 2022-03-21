import React from 'react';
import './style.css';
import Categories from './components/categories';
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Categories categories={{ name: 'Movie' }} />
    </div>
  );
}
