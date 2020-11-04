import React, { useEffect, useState } from "react";
import Chat from "./Chat/Chat";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from "./firebase";
import Login from "./Login";
function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      {user?
        <div className="app_body">
        <Router>
          <Switch>
          <Route exact path="/">
            <Sidebar />
            <Chat />
            </Route>
             <Route path="/rooms/:roomId">
           
             <Sidebar />
            <Chat />
            </Route>
           
          </Switch>
        </Router>
      </div>:<Login />
    }
    
    </div>
  );
}

export default App;
