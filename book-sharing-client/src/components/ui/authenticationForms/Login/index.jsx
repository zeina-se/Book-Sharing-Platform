import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../base/Input";
import Button from "../../../base/Button";
import { sendRequest } from "../../../../core/config/request";
import { requestMethods } from "../../../../core/enums/requestMethods";
import { localStorageAction } from "../../../../core/config/localstorage";
import "../style.css";

const LoginForm = ({ onToggle }) => {
  const navigation = useNavigate();

  const [credentials, setCredentials] = useState({
    email: null,
    password: null,
  });

  const [error, setError] = useState(null);

  const loginHandler = async () => {
    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: "http://127.0.0.1:8000/auth/login",
        body: credentials,
      });

      localStorageAction("access_token", response.token);
      localStorageAction("first_name", response.user.firstName);
      
      navigation("/ListBooks");
    } catch (error) {
      console.log(error);
      setError("Username or Password are incorrect");
    }
  };

  return (
    <div className="flex column spaceBetween rounded authenticationBox">
    <h1> Macrobooks</h1>
      <div className="spacer-30"></div>
      <Input
        label={"Email"}
        placeholder={"Mobile Number or Email"}
        onChange={(email) =>
          setCredentials({
            ...credentials,
            email,
          })
        }
      />
      <div className="spacer-15"></div>
      <Input
        label={"Password"}
        placeholder={"Password"}
        type={"password"}
        onChange={(password) =>
          setCredentials({
            ...credentials,
            password,
          })
        }
      />
      {error && <p>{error}</p>}
      <div className="spacer-30"></div>
      <Button
        color={"primary-bg"}
        textColor={"white-text"}
        text={"Login"}
        onClick={() => loginHandler()}
      />
      <div className="spacer-10"></div>
      <div className="div-with-border">
      <p className="black-text">
        Don't have an account?{" "}
        <span className="pointer primary-text bold" onClick={() => onToggle()}>
          Sign Up
        </span>
      </p>
      </div>
    </div>
  );
};

export default LoginForm;
