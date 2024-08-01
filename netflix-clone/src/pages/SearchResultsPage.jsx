import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import './SearchResultsPage.css';

const SearchResultsPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');
    if (query) {
      const fetchSearchResults = async () => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=0050d63243a273e87495d98a2f4a614a&query=${query}`
          );
          setMovies(response.data.results);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };
      fetchSearchResults();
    }
  }, [location.search]);

  return (
    <div className="search-results-page">
      <h2>Search Results</h2>
      <div className="search-results__movies">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
