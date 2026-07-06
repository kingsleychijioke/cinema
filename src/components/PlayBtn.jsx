import React, { useState } from "react";
import "./PlayBtn.css";
import { IoPlayOutline } from "react-icons/io5";
import Modal from "./Modal";

function PlayBtn({ movie, modal, toggleModal }) {
  return (
    <>
      <div className={`trailer ${movie.active ? "active" : undefined}`}>
        <a
          href="#"
          className="PlayBtn"
          onClick={(e) => {
            e.preventDefault();
            toggleModal();
          }}
        >
          <IoPlayOutline className="playout" />
        </a>
        <p>Watch Trailer</p>
      </div>

      {movie.active && (
        <Modal movie={movie} status={modal} togglemodal={toggleModal} />
      )}
    </>
  );
}

export default PlayBtn;
