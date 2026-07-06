import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "./App.css";
import Header from "./pages/header";
import Banner from "./pages/Banner";
import Main from "./pages/Main";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <div id="Home">
      <Header />
      <Banner />
      <Main />
      <Footer />
    </div>
    </>
  );
}

export default App;
