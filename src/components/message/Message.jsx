import React from "react";
import "./message.css";
function Message({own}) {
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className="messageTop">
        <img
          className="messageImg"
            crossOrigin="anonymous"
          src="https://yar-scial-server.herokuapp.com/assets/p4.jpeg"
          alt=""
        />
        <p className="messageText">Hello</p>
      </div>
      <div className="messageBottom">
        <p className="messageTime">1 hour ago</p>
      </div>
    </div>
  );
}

export default Message;
