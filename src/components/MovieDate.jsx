import React from "react";
import "./MovieDate.css";

function MovieDate({ movie }) {
  const [day, month] = movie.date.split(" ");
  return (
    <div className={`date ${movie.active ? "active" : undefined}`}>
      <h2>
        {day}
        <span>{month}</span>
      </h2>
    </div>
  );
}

export default MovieDate;
