import React from "react";
import "../components/moviecontent.css";
import titleimg from "../../public/assets/movies/transformer-title.png";
import Button from "./Button";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";

function moviecontent({ movie }) {
  return (
    <div className={`content ${movie.active ? "active" : undefined}`}>
      <img src={movie.titleImg} alt="movie title" className="movie-title" />
      <h4>
        <span>{movie.year}</span>
        <span>
          <i>{movie.ageLimit}</i>
        </span>
        <span>{movie.length}</span>
        <span>{movie.category}</span>
      </h4>
      <p>{movie.description}</p>
      <div className="button">
        <Button
          icon={<IoBookmarkOutline />}
          name="book"
          color="#ff3700"
          bgcolor="#ffffff"
        />

        <Button icon={<IoAddOutline />} name="MY LIST" />
      </div>
    </div>
  );
}

export default moviecontent;
