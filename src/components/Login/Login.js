import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../../firebase";
const LoginStyled = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
    justify-content:center;

  .login__logo {
    object-fit: contain;
    width: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .login__container {
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 20px;
  }

  .login__container > h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  .login__container > form > h5 {
    margin-bottom: 5px;
  }

  .login__container > form > input {
    height: 30px;
    margin-bottom: 10px;
    background-color: white;
    width: 98%;
  }

  .login__container > p {
    margin-top: 15px;
    font-size: 12px;
  }

  .login__signInButton {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
  }

  .login__registerButton {
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: darkgray;
  }
`;
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <LoginStyled>
      <Link to="/">
        <img
          className="login__logo"
          alt="amazon logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </LoginStyled>
  );
}

export default Login;
