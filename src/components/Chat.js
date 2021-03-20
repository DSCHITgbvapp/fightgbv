import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import "./Chat.css";

// import components
// import db from "../firebase";

import ChatMessage from "./ChatMessage";

function Chat() {
  //useState to keep track off what user is typing
  const [input, setInput] = useState("");
  //write javascript here

  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
  };
  return (
    <div className="Chat">
      <div className="chat_body">
        <ChatMessage />
      </div>

      <div className="chat_footer">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button className="button" type="submit" onClick={sendMessage}>
            Send
          </button>
          <IconButton>
            <SendIcon onClick={sendMessage} />
          </IconButton>
        </form>
      </div>
    </div>
  );
}

export default Chat;
