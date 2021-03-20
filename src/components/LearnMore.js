import React, { useState } from "react";
import "./LearnMore.css";

import { HelpOutline } from "@material-ui/icons";

// import components

function LearnMore() {
  //write javascript here
  const [togglegbv, setTogglegbv] = useState(true);
  const [toggleabuse, setToggleabuse] = useState(true);

  const GBVtoggler = () => {
    setTogglegbv((prev) => !prev);
  };

  const Abusetoggler = () => {
    setToggleabuse((prev) => !prev);
  };

  return (
    <div className="LearnMore">
      <button onClick={GBVtoggler}>
        {" "}
        Gender Based Violence <HelpOutline />{" "}
      </button>
      <div className={togglegbv ? "active" : ""}>
        <h1>What is GBV</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
          quas. Lorem, ipsum dolor. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Hic, neque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
          quas. Lorem, ipsum dolor. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Hic, neque!
        </p>
        <h1>What does the Zimbabwe constitution say about GBV</h1>
        <p>
          Section [1] subsection 3 ..Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Veritatis, quas. Lorem, ipsum dolor. Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Hic, neque!
        </p>
        <h1>I am a victim where can I get help</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
          quas. Lorem, ipsum dolor. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Hic, neque!
        </p>
      </div>

      {/* Abuse toggler */}
      <button onClick={Abusetoggler}>
        {" "}
        Abuse <HelpOutline />
      </button>
      <div className={toggleabuse ? "active" : ""}>
        <h1>Types of abuse</h1>

        <h3>Sexual Abuse</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
          quas. Lorem, ipsum dolor. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Hic, neque!
        </p>
        <h3>Physical</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
          quas. Lorem, ipsum dolor. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Hic, neque!
        </p>
        <h3>Economic Abuse</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
          quas. Lorem, ipsum dolor. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Hic, neque!
        </p>
        <h1>What does the constitution of Zim say about Abuse</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
          quas. Lorem, ipsum dolor. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Hic, neque!
        </p>
        <h3>Where to get help if I am a victim</h3>
        <ul>
          <li>Roots - A place that houses victims of GBV and abuse</li>
          <p>
            Contact <a href="tel:+263775900840">+263775900840</a>
          </p>
          <li>lorem Ipsum</li>
          <li>lorem Ipsum dolor</li>
        </ul>
      </div>
    </div>
  );
}

export default LearnMore;
