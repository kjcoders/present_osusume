import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home_page">
      <h1 class="text">Welcome to Present Osusume!</h1>
      <h3>We recommend the best gift for the person Who you love🎁</h3>
      <Link to="/about">
        <button className="btn_start">Let's go!</button>
      </Link>
    </section>
  )
};
export default Home;