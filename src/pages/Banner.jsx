import React, { useState, useEffect } from "react";
import "./Banner.css";

import MovieContent from "../components/moviecontent";
import MovieDate from "../components/MovieDate";
import PlayBtn from "../components/PlayBtn.jsx";
import Movieswiper from "../components/Movieswiper.jsx";

function Banner() {
  const [movies, setmovies] = useState([]);

  const fetchData = () => {
    fetch("/cinema/data/movieData.json")
      .then((res) => res.json())
      .then((data) => setmovies(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSlidechange = (id) => {
    const newMovies = movies.map((movie) => ({
      ...movie,
      active: movie._id === id,
    }));

    setmovies(newMovies);
    setmovies(newMovies);
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  console.log(movies.filter((movie) => movie.active));
  return (
    <div className="banner">
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => (
          <div key={movie._id} className="movie">
            <img
              src={movie.bgImg}
              alt="Backgroundimg"
              className={`bgimg ${movie.active ? "active" : undefined}`}
            />
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <MovieContent movie={movie} />
                </div>
                <div className="col-lg-6 col-md-12">
                  <MovieDate movie={movie} />
                  <PlayBtn
                    movie={movie}
                    modal={modal}
                    toggleModal={toggleModal}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

      {movies && movies.length > 0 && (
        <Movieswiper slides={movies} slidechange={handleSlidechange} />
      )}
    </div>
  );
}

export default Banner;
