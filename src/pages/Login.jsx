import React from "react";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const Login = () => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [isAuth, toggleAuth] = useContext(AppContext);

  const submitHandler = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://reqres.in/api/register",
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        console.log(`yay`);
        toggleAuth();
      })
      .catch((err) => console.log(err));
  };
  console.log(isAuth);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(e.target.value);
          }}
          placeholder="Enter Email"
        />
        <input
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
