import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handelSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">Login</h2>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
          className="input input-bordered input-primary w-full max-w-xs text-white"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input input-bordered input-primary w-full max-w-xs text-white"
        />
        <button className="btn btn-secondary" onClick={handelSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
