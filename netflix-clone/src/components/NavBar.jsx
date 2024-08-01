import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav__logo-link">
        <img src="/logo.png" alt="Netflix Logo" className="nav__logo" />
      </Link>
      <form className="nav__search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          className="nav__search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Link to="/login" className="nav__button">
        Sign In
      </Link>
    </nav>
  );
};

export default NavBar;
