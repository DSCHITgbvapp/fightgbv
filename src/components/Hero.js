import React from "react";
import "./Hero.css";

// import components

function Hero() {
  //write javascript here

  return (
    <div className="hero">
      <div className="top_hero"></div>
      <div className="bottom_hero">
        <div className="main_text">
          <h1>Let's Overcome This Together</h1>
          <p>
            “Strength doesn’t come from what you can do. It comes from
            overcoming the things you once thought you couldn’t.”{" "}
            <span className="quote">—​Rikki Rogers</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
