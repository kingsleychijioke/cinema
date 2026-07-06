import React from "react";
import "./FooterNavItem.css";
import { IoChevronForwardOutline } from "react-icons/io5";

function FooterNavItem({ name }) {
  return (
    <li>
      <IoChevronForwardOutline className="outline" /> <a href="#">{name}</a>
    </li>
  );
}

export default FooterNavItem;
