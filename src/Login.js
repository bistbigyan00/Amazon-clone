import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase'

function Login() {

    const navigate = useNavigate();

    // store email and apssword using use state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (e) =>{
        e.preventDefault(); //stops the refersh
        auth.signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                //logged in success
                //redirect to homepage
                navigate('/');
            })
            .catch(e=>alert(e.message));
    }

    const register = (e) => {
        e.preventDefault(); //stops the refersh
        auth.createUserWithEmailAndPassword(email,password)
            .then(auth=>{
                //created a user and logged in
                //redirect to homepage
                navigate('/');
            })
            .catch((e)=>alert(e.message));
    }

    return (
        <div className="login">
            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input 
                        value={email} 
                        // whatever is been typed, set email value
                        onChange={e=>setEmail(e.target.value)}
                        type="email" />
                    <h5>Password</h5>
                    <input 
                        value={password} 
                        onChange={e=>setPassword(e.target.value)} type="password" 
                    />
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By Signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our interest-Based Ads Notice.
                </p>
                <button onClick={register} type="submit" className="login__registerButton">Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login
