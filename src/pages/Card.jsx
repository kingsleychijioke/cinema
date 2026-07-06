import React from "react";

import { IoPlayOutline } from "react-icons/io5";
import "./card.css";

function Card({ movies }) {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6 ">
      <div className="movie-card ">
        <img
          src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
          alt={movies.title}
          className="img-fluid"
        />
        <p>{movies.title} </p>
        <div className="content">
          <h4>WATCH NOW</h4>
          <div className="card-icon PlayBtn">
            <IoPlayOutline className="icon playout" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
