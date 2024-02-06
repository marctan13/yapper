import firebase from 'firebase/compat/app'; 
import {auth} from '../firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch(err) {
        console.log(err)
      }
    }

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      }
    
      return (
        <>
          <input placeholder="Email..." onChange={(e) => setEmail(e.target.value)}/>
          <input placeholder="Password..." onChange={(e) => setPassword(e.target.value)}/>
          <button onChange={signIn}>Sign in</button>
          <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
          <p>Do not violate the community guidelines or you will be banned for life!</p>
        </>
      )
}

export default SignIn
