import React from "react";
import "./LearnMore.css";
import { Link } from "react-router-dom";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Coercion from "./../asserts/coercion.jpg";
import Assault from "./../asserts/sexual-assault.jpg";
import Stalking from "./../asserts/stalking.jpg";

function LearnMore() {
  return (
    <div className="LearnMore">
      <Link to="/coercion">
        <div className="postThumbnail">
          <img src={Coercion} alt="" />
          <div className="thumbnailDescription">
            <h2>Sexual Coercion</h2>
            <p>
              Sexual coercion is unwanted sexual activity that happens when you
              are pressured, tricked, threatened, or forced in a nonphysical
              way....
            </p>
          </div>
        </div>
      </Link>
      <Link to="/sexual-assault">
        <div className="postThumbnail">
          <img src={Assault} alt="" />
          <div className="thumbnailDescription">
            <h2>Sexual Assault</h2>
            <p>
              Sexual assault is any type of sexual activity or contact,
              including rape, that happens without your consent....
            </p>
          </div>
        </div>
      </Link>
      <Link to="/stalking">
        <div className="postThumbnail">
          <img src={Stalking} alt="" />
          <div className="thumbnailDescription">
            <h2>Stalking</h2>
            <p>
              Stalking is repeated contact that makes you feel afraid or
              harassed. Someone may stalk you by following you or calling you
              often...
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default LearnMore;
