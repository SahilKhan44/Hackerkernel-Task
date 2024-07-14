import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "./Header";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);

  async function login() {
    // console.warn(email,password)
    let item = { email, password };
    let result = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result));
    navigate("/add");
  }
  return (
    <div>
      <Header/>
      <h1 className="text-center mt-5">Login Page</h1>

      <div className="col-sm-6 offset-sm-3 text-center">
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="form-control mt-5"
        ></input>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="form-control mt-5"
        ></input>
        <button onClick={login} className="btn btn-primary mt-5">
          {" "}
          Login
        </button>
      </div>
     
    </div>
  );
}
