import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { IconButton, Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import img from "../IMG/B358AC13-B442-48F2-A77F-C3E1371A4BA8_1_105_c.jpeg";
import SidebarChat from "./SidebarChat/SidebarChat";
import uniqid from "uniqid";
import db, { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Sidebar() {
  const [user] = useAuthState(auth);

  const [value, setValue] = useState("");
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>(
      setRooms(snapshot.docs.map(doc=>({
        id:doc.id,
        room:doc.data()
      })))
      
    ));
    }, [rooms]);

  const createRoom = (e) => {
    e.preventDefault();
    if (value) {
      console.log(value);
      db.collection("rooms").add({
        roomName: value,
      });
      setValue("");
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <IconButton onClick={() => auth.signOut()}>
          <Avatar src={user.photoURL} />
        </IconButton>

        <div className="sidebar_header_right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_search_container">
          <SearchIcon />
          <form onSubmit={createRoom} action="">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="search or start new chat"
              type="text"
            />
          </form>
        </div>
      </div>
      <div className="sidebar_chats">
        {rooms.map(room=>(
                  <SidebarChat key={room.id} id={room.id} roomName={room.room.roomName}/>

        ))}
      </div>
    </div>
  );
}

export default Sidebar;
