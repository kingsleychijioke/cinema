import React from "react";
import NavList from "../components/NavList";
import "./header.css";
import NavListData from "../data/NavListData";
import Search from "../components/Search";
import Button from "../components/Button";
import { IoLogInOutline } from "react-icons/io5";

function header() {
  return (
    <header>
      <a href="" className="logo">
        Cinema
      </a>
      <nav className="nav">
        {NavListData.map((nav) => (
          <NavList key={nav._id} nav={nav} />
        ))}
      </nav>
      <Search />
      <Button icon={<IoLogInOutline />} name="SIGN IN" />
    </header>
  );
}

export default header;
