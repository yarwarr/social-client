import React, { useState } from "react";
import { useEffect } from "react";
import "./conversation.css";
import { useSelector } from "react-redux";

function Conversation({conversation, currentId}) {
  // const img = conversation?.members?.find((m) => m !== user._id)?.picturePath;
  // const name = conversation?.members?.find((m) => m !== user._id)?.name;
  // const lastMessage = conversation?.messages[conversation?.messages.length - 1];
  // const lastMessageTime = lastMessage?.createdAt;
  // const lastMessageText = lastMessage?.text;
  // const lastMessageSender = lastMessage?.sender;
  // const lastMessageSenderName = lastMessageSender?.name;
  // const lastMessageSenderPicturePath = lastMessageSender?.picturePath;
  // const lastMessageSenderIsUser = lastMessageSender?._id === user._id;
  // const lastMessageSenderIsFriend = user?.friends?.find(
  //   (f) => f._id === lastMessageSender?._id
  // );
  const [user, setUser] = useState(null);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentId);
    const getUser = async () => {
      const response = await fetch(
        `https://yar-scial-server.herokuapp.com/users/${friendId}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      console.log(data);
      setUser(data);
    };
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
  
  
  return (
    <div className="conversation">
      <img className="conversationImg" crossOrigin="anonymous" src={"https://yar-scial-server.herokuapp.com/assets/"+user.picturePath} alt="" />
      <span className="conversationName">{user.firstName+" "+user.lastName}</span>
    </div>
  );
}

export default Conversation;
