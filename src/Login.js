import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import db, { auth, provider } from './firebase'
import aux from './hoc/Aux'

const Login = () => {
    const [user]=useAuthState(auth)
    const login =()=>{
        auth.signInWithPopup(provider).then((user)=>{
            console.log(user);
        })
    }
    return (
        <div>
         <button onClick={login}>log in with google</button>  
        </div>
    )
}

export default Login
