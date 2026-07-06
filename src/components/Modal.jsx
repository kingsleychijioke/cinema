import React from "react";
import "./modal.css";
import { IoCloseOutline } from "react-icons/io5";

function Modal({ movie, status, togglemodal }) {
  return (
    <div className={`moviemodal ${status ? "active" : undefined}`}>
      <a
        href="#"
        className="modalclose"
        onClick={(e) => {
          e.preventDefault();
          togglemodal();
        }}
      >
        <IoCloseOutline className="icon" />
      </a>
      <iframe
        width="1280"
        height="720"
        src={movie.video}
        title={`${movie.title} | Official Trailer`}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Modal;
