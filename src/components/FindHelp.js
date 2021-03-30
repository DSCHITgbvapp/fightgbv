import React from "react";
import "./FindHelp.css";
import CallIcon from "@material-ui/icons/Call";
import RoomIcon from "@material-ui/icons/Room";

import Data from "../data.json";

function FindHelp() {
  //write javascript here

  return (
    <div className="FindHelp">
      {Data.map((list) => {
        return (
          <div className="listItem">
            <h3>{list.name}</h3>
            <p>{list.description}</p>
            <p>
              <RoomIcon /> {list.address}
            </p>
            <p className="phone">
              <CallIcon /> {list.phone}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default FindHelp;
