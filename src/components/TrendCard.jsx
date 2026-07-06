import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import "./trendcard.css";

function TrendCard({ slide }) {
  return (
    <div className="trend-card">
      <img src={slide.previewImg} alt="" className="img-fluid" />
      <a href="#" onClick={(e) => e.preventDefault()}>
        Add to calendar <IoCalendarOutline />
      </a>
    </div>
  );
}

export default TrendCard;
