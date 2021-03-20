import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./Functions.css";
import Call from "./../asserts/call.svg";
import Text from "./../asserts/text.svg";
import Question from "./../asserts/question.svg";
import Learn from "./../asserts/learn.svg";
import Map from "./../asserts/map.svg";
import GroupChat from "./../asserts/groupchat.svg";
import ShareStory from "./../asserts/share.svg";

import CallIcon from "@material-ui/icons/Call";
import ChatIcon from "@material-ui/icons/Chat";
import GroupIcon from "@material-ui/icons/Group";
import { HelpOutline } from "@material-ui/icons";
import RoomIcon from "@material-ui/icons/Room";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import MenuBookIcon from "@material-ui/icons/MenuBook";

import db from "../firebase";

function Functions({ id, name }) {
  //write javascript here
  const { roomId } = useParams();

  const [chats, setChats] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="Functions">
      <div className="container">
        <Link to="/report">
          <div className="box">
            <img className="thumbnail" src={Call} alt="post thubnail" />
            <div className="icon">
              <CallIcon />
            </div>
            <div className="box-preview">
              <h6 className="box-title">Report A Case</h6>
              <p className="box-intro">
                Report your case to us and we will call you with assistance
                within 24hrs.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/chat">
          <div className="box">
            <img className="thumbnail" src={Text} alt="post thubnail" />
            <div className="icon">
              <ChatIcon />
            </div>
            <div className="box-preview">
              <h6 className="box-title">Chat With A Proffessional</h6>
              <p className="box-intro">
                Send a message and get replied by professionalls who are ready
                to help
              </p>
            </div>
          </div>
        </Link>

        <Link to={`/chats/${id}`}>
          <div className="box">
            <img className="thumbnail" src={GroupChat} alt="post thubnail" />
            <div className="icon">
              <GroupIcon />
            </div>
            <div className="box-preview">
              <h6 className="box-title">Support Group</h6>
              <p className="box-intro">
                Interact with other victims anonymously
                {chats.map((chat) => (
                  <p key={chat.id} id={chat.id} name={chat.data.name}>
                    {chat.data.name}
                  </p>
                ))}
              </p>
            </div>
          </div>
        </Link>

        <Link to="/risk">
          <div className="box">
            <img className="thumbnail" src={Question} alt="post thubnail" />
            <div className="icon">
              <HelpOutline />
            </div>
            <div className="box-preview">
              <h6 className="box-title">Am I At Risk</h6>
              <p className="box-intro">
                Go through an assessment that will determine whether you're at
                risk or not
              </p>
            </div>
          </div>
        </Link>

        <Link to="/help">
          <div className="box">
            <img className="thumbnail" src={Map} alt="post thubnail" />
            <div className="icon">
              <RoomIcon />
            </div>
            <div className="box-preview">
              <h6 className="box-title">Find Help</h6>
              <p className="box-intro">
                Find places near you where you can find help
              </p>
            </div>
          </div>
        </Link>

        <Link to="/learn-more">
          <div className="box">
            <img className="thumbnail" src={Learn} alt="post thubnail" />
            <div className="icon">
              <LocalLibraryIcon />
            </div>
            <div className="box-preview">
              <h6 className="box-title">Learn More</h6>
              <p className="box-intro">
                Learn more about gbv, rape with our resources
              </p>
            </div>
          </div>
        </Link>

        <Link to="/share-story">
          <div className="box">
            <img className="thumbnail" src={ShareStory} alt="post thubnail" />
            <div className="icon">
              <MenuBookIcon />
            </div>
            <div className="box-preview">
              <h6 className="box-title">Read Or Share Story</h6>
              <p className="box-intro">
                Read encouraging stories of other victims or share a story
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Functions;
