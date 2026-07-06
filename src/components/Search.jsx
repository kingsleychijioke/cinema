import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import "./search.css";

function Search() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const API_KEY = "14d6a93f32798aeb3e4afc9ac75ce619";

  useEffect(() => {
    if (search.trim() === "") {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`,
      );

      const data = await res.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, [search]);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <IoSearchOutline className="search-icon" />

      {movies.length > 0 && (
        <div className="search-results">
        {movies.map((movie) => (
  <div className="movie-item" key={movie.id}>
    <img
      src={
        movie.poster_path
          ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
          : "https://via.placeholder.com/92x138?text=No+Image"
      }
      alt={movie.title}
    />

    <div className="movie-info">
      <h4>{movie.title}</h4>

      <div className="movie-meta">
        <span>{movie.release_date?.split("-")[0] || "N/A"}</span>
        <span>⭐ {movie.vote_average?.toFixed(1)}</span>
      </div>
    </div>
  </div>
))}
        </div>
      )}
    </div>
  );
}

export default Search;
