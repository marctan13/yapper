import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import "./SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="container">
      <div className="title-logo">
        <img className="logo" src="./yapper-logo.png" alt="logo" />
        <h1 className="title">Yapper Chat</h1>
      </div>
      <div className="form-container">
        <form className="form">
          <input
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="buttons">
            <button className="sign-in" onChange={signIn}>
              Sign in
            </button>
            <hr />
            <button className="sign-in" onClick={signInWithGoogle}>
              Sign in with Google
            </button>
          </div>
          <div className="links">
            {/* Link to Signup Page? */}
            <a href="#">Sign up</a>
            {/* Link to Forgot Password Page? */}
            <a href="#">Forgot Password?</a>
          </div>
        </form>
      </div>
      <p>
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </div>
  );
}

export default SignIn;
