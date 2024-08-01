// src/components/MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MovieDetails.css'; // Estilize conforme necessário

const MovieDetails = ({ match }) => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=YOUR_API_KEY&language=en-US`);
            setMovie(request.data);
        };
        fetchData();
    }, [match.params.id]);

    return (
        <div className="movie-details">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-details__info">
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <p>Rating: {movie.vote_average}</p>
                <p>Release Date: {movie.release_date}</p>
                <p>Cast: {/* Adicione detalhes do elenco aqui */}</p>
            </div>
        </div>
    );
};

export default MovieDetails;
