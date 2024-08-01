import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import './MovieRow.css';

const MovieRow = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error('Error fetching data from TMDB:', error);
      }
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="movie-row__posters">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
