import React from "react";

import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import "./Login.css";

const Login = () => {
  return (
    <Card className="login">
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email"></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password"></input>
        </div>
        <div>
          <Button type="submit">Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
