import { Search } from "@mui/icons-material";
import { IconButton, InputBase } from "@mui/material";
import { Box } from "@mui/system";
import Conversation from "components/conversations/Conversation";
import Message from "components/message/Message";
import React from "react";
import NavBar from "scenes/navbar";
import "./index.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ChatPage = () => {
  const { _id, picturePath } = useSelector((state) => state.user);
  const [conversations, setConversations] = useState([]);
  const [user, setUser] = useState(null);
  const token = useSelector((state) => state.token);
  const getConversations = async () => {
    try {
      const res = await fetch(
        `https://yar-scial-server.herokuapp.com/conversations/${_id}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      
      
      setConversations(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getUser = async () => {
    const response = await fetch(
      `https://yar-scial-server.herokuapp.com/users/${_id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    setUser(data);
  };

  
  useEffect(() => {
    
    // getConversations();

    // getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }
  
  return (
    <Box>
      <NavBar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <InputBase className="chatMenuInput" placeholder="Search....." />
            <IconButton>
              <Search />
            </IconButton>
            {/* <input placeholder="Search for friends" className="chatMenuInput" /> */}
            {/* {conversations.map((c) => (
              <Conversation
                key={c._id}
                
                conversation = {c}
                currentId={_id}
              />
            ))} */}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message own={true} />
              <Message own={true} />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message own={true} />
              <Message />
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="write something..."
              ></textarea>
              <button className="chatSubmitButton">Send</button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ChatPage;
