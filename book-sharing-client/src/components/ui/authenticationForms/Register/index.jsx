import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../../base/Input";
import Button from "../../../base/Button";
// import InputFile from "../../../base/InputFile";
import { sendRequest } from "../../../../core/config/request";
import { requestMethods } from "../../../../core/enums/requestMethods";
import { localStorageAction } from "../../../../core/config/localstorage";

const RegisterForm = ({ onToggle }) => {
  const navigation = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    full_name: "",
    username: "",
  });
  const [error, setError] = useState(null);

  // const handleFileChange = (file) => {
  //   setCredentials({
  //     ...credentials,
  //     picture: file,
  //   });
  // };
console.log(credentials);
  const signupHandler = async () => {
    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: "http://127.0.0.1:8000/auth/register",
        body: credentials,
      });

      localStorageAction("access_token", response.authorisation.token);
      
      navigation("/");
        } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="flex column spaceBetween rounded authenticationBox">
<h1>Sign Up</h1>
      <div className="spacer-30"></div>
      <Input
        label={"Email"}
        onChange={(email) =>
          setCredentials({
            ...credentials,
            email,
          })
        }
        placeholder={"Email"}
      />
      <div className="spacer-15"></div>
      <Input
        label={"Full Name"}
        placeholder={"Full Name"}
        onChange={(full_name) =>
          setCredentials({
            ...credentials,
            full_name,
          })
        }
      />
      <div className="spacer-15"></div>
      <Input
        label={"Username"}
        placeholder={"Username"}
        onChange={(username) =>
          setCredentials({
            ...credentials,
            username,
          })
        }
      />
      <div className="spacer-15"></div>
      <Input
        label={"Password"}
        placeholder={"Password"}
        onChange={(password) =>
          setCredentials({
            ...credentials,
            password,
          })
        }
      />
      {/* <div className="spacer-15"></div>
      <InputFile
        id="myfile"
        name="picture"
        onChange={handleFileChange}
        placeholder="Add profile picture.."
        required
      /> */}
      <div className="spacer-30"></div>

      <Button
        color={"primary-bg"}
        textColor={"white-text"}
        text={"Signup"}
        onClick={() => signupHandler()}
      />
      <div className="spacer-10"></div>
      <p className="black-text">
        Already have an account?{" "}
        <span
          className="pointer primary-text bold"
          onClick={() => onToggle()}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default RegisterForm;