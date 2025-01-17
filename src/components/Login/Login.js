import React, { useEffect, useState } from "react";

import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import "./Login.css";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
      console.log("form is valid", emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const emailValidateHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };
  const passwordValidateHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submit handler triggered");
    if (!props.onLogin) {
      console.error("onLogin function is not defined!");
      return;
    }
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <div className="login">
      <Card>
        <form onSubmit={submitHandler}>
          <div
            className={`control ${emailIsValid === false ? "invalid" : ""} `}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailValidateHandler}
            ></input>
          </div>
          <div
            className={`control ${passwordIsValid === false ? "invalid" : ""} `}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordValidateHandler}
            ></input>
          </div>
          <div className="control">
            <Button type="submit" disabled={!formIsValid}>
              Login
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
