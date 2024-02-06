import React, { useState } from "react";
import "./App.css";

import {auth} from './firebase.js'
import "firebase/compat/firestore";
import "firebase/compat/auth";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import ChatRoom from "./components/ChatRoom";

import { useAuthState } from "react-firebase-hooks/auth";


function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
