import React,{useState,useEffect} from "react";
import {Link,useParams} from 'react-router-dom'
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";
import Aux from "../../hoc/Aux";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useStateValue } from "../../StateProvider";
function SidebarChat({id,roomName}) {
    const[{},dispatch] = useStateValue()
    const [user] = useAuthState(auth)

const addToactiveRoom=()=>{
  dispatch({
    type:"ACTIVE_ROOM",
    roomInfo:{id,roomName}
  })
}

  return (
         <div onClick={addToactiveRoom} id={id} className="sidebarchat">
         <Avatar src={user.photoURL}/>
         <div  className="sidebarChat_info">
           <h2>{roomName}</h2>
           <p></p>
         </div>
       </div>

       
        


  );
}

export default SidebarChat;
