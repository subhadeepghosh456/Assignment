import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logInlogout } from "../Redux/authSlice";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogin() {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName,
        password: password,
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Invalid Credentials");
        }
        return res.json();
      })
      .then((res) => setToken(res?.token))
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
    if (token) {
      localStorage.setItem("token", token);
      dispatch(logInlogout(true));
      navigate("/");
    }
  }

  //   console.log(token);
  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="login">
        <p>User Name</p>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <p>Password</p>
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
