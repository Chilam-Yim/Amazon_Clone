import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import {auth} from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
     auth.signInWithEmailAndPassword(email, password)
     .then(auth=>{
      navigate("/")
     })
     .catch(error => {alert(error.message)
    alert(error.code)})
  };

  //preventDefault() to prevent refreshing
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      //it successfully created a new user and pw
      console.log(auth);
      if(auth){
        navigate('/')
      }
    })
    .catch(error => alert(error.message))
  };
  return (
    <div className="loginPage">
      <Link to="/">
        <img
          className="loginLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="loginContainer">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            type="text "
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <h5>Password</h5>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button type="submit" onClick={signIn} className="signInButton">
            Sign In
          </button>
          <p>
            By signing-in you agree to the FAKE AMAZON CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>

          <button onClick={register} className="registerButton">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
