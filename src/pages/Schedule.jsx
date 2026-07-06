import React, { useState, useEffect } from "react";
import "./schedule.css";
import Card from "./Card";

function Schedule() {
  const filterList = [
    { _id: 1, name: "All", id: 0, active: true },
    { _id: 2, name: "Action", id: 28, active: false },
    { _id: 3, name: "Adventure", id: 12, active: false },
{ "id": 35, "name": "Comedy" },
 { "id": 10749, "name": "Romance" },
    { _id: 5, name: "Thriller", id: 53, active: false },
  ];

  const [data, setData] = useState([]);
  const [movies, setmovies] = useState([]);
  const [fliters, setfliters] = useState(filterList);

  const page = Math.floor(Math.random() * 500) + 1;

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=14d6a93f32798aeb3e4afc9ac75ce619&page=${page}`,
      );

      const data = await res.json();
    const movies = data.results.slice(0, 18);

      setData(movies);
    setmovies(movies);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setmovies(data);
  }, [data]);

  const handleFilterMovies = (id) => {
    const newFilters = fliters.map((filter) => ({
      ...filter,
      active: filter.id === id,
    }));

    setfliters(newFilters);

    if (id === 0) {
      setmovies(data);
      return;
    }

    const filteredMovies = data.filter((movie) => movie.genre_ids.includes(id));

    setmovies(filteredMovies);
  };

  return (
    <section id="schedule" className="schedule">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Now Discovering</h4>
        </div>
        <div className="row">
          <ul className="filters">
            {fliters.map((filters) => (
              <li
                key={filters._id}
                className={`${filters.active ? "active" : undefined}`}
                onClick={() => handleFilterMovies(filters.id)}
              >
                {filters.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="row mt-5" >
          {movies &&
            movies.length > 0 &&
            movies.map((movies) => <Card key={movies.id} movies={movies} />)}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
