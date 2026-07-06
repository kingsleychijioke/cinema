import React from "react";
import "./main.css";
import Schedule from "./Schedule";
import Trend from "./Trend";
import Blog from "./Blog";

function Main() {
  return (
    <main>
      <section id="Schedule">
        <Schedule />
      </section>

      <section id="Trend">
        <Trend />
      </section>

      <section id="Blog">
        <Blog />
      </section>
    </main>
  );
}

export default Main;