import React from 'react';
import NavBar from '../components/NavBar';
import MovieRow from '../components/MovieRow';
import requests from '../requests';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <NavBar />
      <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} />
      <MovieRow title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <MovieRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <MovieRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomePage;
