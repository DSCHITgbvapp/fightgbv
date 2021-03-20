import React from "react";
import "./ChatMessage.css";

// import components

function ChatMessage() {
  //write javascript here

  return (
    <div className="ChatMessage">
      <p className="chat_message ">
        <span className="chat_name">Rodney</span>
        Hi! Was wondering if there is anything we can help you out with today?
        <span className="chat_timestamp">09:00</span>
      </p>
      <p className="chat_message chat_receiver">
        <span className="chat_name">Me</span>
        No
        <span className="chat_timestamp">09:00</span>
      </p>
    </div>
  );
}

export default ChatMessage;
