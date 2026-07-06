import React from "react";
import "./NavList.css";

function NavList({ nav }) {
  return (
    <li>
      <a href={nav.link}>{nav.name}</a>
    </li>
  );
}
  
export default NavList;
