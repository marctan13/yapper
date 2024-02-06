import React from 'react'
import {auth} from '../firebase.js'

function SignOut() {
    return auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
      )
}

export default SignOut
