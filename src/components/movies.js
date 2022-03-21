import React from 'react';

export default function Movies({ movie }) {
  return (
    <div className="movie">
      <p className="movie-name">{movie}</p>
    </div>
  );
}
