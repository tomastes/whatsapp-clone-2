import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SelectInput from "@material-ui/core/Select/SelectInput";
import MicIcon from "@material-ui/icons/Mic";
import axios from "../axios";
import db, { auth } from "../firebase";
import firebase from "firebase";
import { useStateValue } from "../StateProvider";
import { useAuthState } from "react-firebase-hooks/auth";
function Chat() {
  const [user] = useAuthState(auth)
  const [{ activeRoom }, dipatch] = useStateValue();
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
if(activeRoom){
    db.collection("rooms")
    .doc(activeRoom?.id)
    .collection("messages") .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) =>
      setMessages(snapshot.docs.map((doc) => doc.data()))
    );
}
   
   
    
  }, [activeRoom]);

  const sendMessage = (e) => {
    e.preventDefault();
    if(input===''){
      return
    }
    db.collection("rooms").doc(activeRoom?.id).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_header_info">
          <h3>{activeRoom?.roomName}</h3>
          <p>last seen at...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      {/* ${!message.received && "chat_receiver"}`} */}
      <div className="chat_body">
        {messages?.map(({ message, timestamp }) => (
          <p key={timestamp} className="chat_message">
            <span className="chat_name">{user.displayName.substring(0,8)}</span>
            {message}
            <span className="chat_timestamp">
              {new Date(timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>

      <div className="chat_footer">
        <InsertEmoticonIcon />

        <form onSubmit={(e) => sendMessage(e)} className="form_footer">
          <input disabled={!activeRoom}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type a msg"
            type="text"
          />

          <MicIcon />
        </form>
      </div>
    </div>
  );
}

export default Chat;
