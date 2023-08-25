import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../base/Input";
import Button from "../../base/Button";
import InputFile from "../../base/InputFile";
import { sendRequest } from "../../../core/config/request";
import { requestMethods } from "../../../core/enums/requestMethods";
import { localStorageAction } from "../../../core/config/localstorage";

const BookForm = ({ onToggle }) => {
  // const navigation = useNavigate();

  const [credentials, setCredentials] = useState({
    name: null,
    author: null,
    picture:null,
    shortReview:null
  });
  const [error, setError] = useState(null);

 const handleFileChange = (picture) => {
    setCredentials({
      ...credentials,
      picture: picture,
    });
  };

console.log(credentials);

const addBookHandler = async () => {
  
    try {
      const response = await sendRequest({
        route: "/books/add",
        method: requestMethods.POST,
        body: credentials,
      });


    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.log(error);
  }
};


  return (
    <div className="flex column spaceBetween rounded authenticationBox">

      <Input
        label={"Name"}
        onChange={(name) =>
          setCredentials({
            ...credentials,
            name,
          })
        }
        placeholder={"Name"}
      />
      <div className="spacer-15"></div>
      <Input
        label={"Author"}
        placeholder={"author"}
        onChange={(author) =>
          setCredentials({
            ...credentials,
            author,
          })
        }
      />
      <div className="spacer-15"></div>
      <Input
        label={"short Review"}
        placeholder={"short Review"}
        onChange={(shortReview) =>
          setCredentials({
            ...credentials,
            shortReview,
          })
        }
      />
      <div className="spacer-15"></div>
      <form action="/books/add" method="post" encType="multipart/form-data">

      <InputFile
        id="myfile"
        name="picture"
        onChange={handleFileChange}
        placeholder="Add picture..."
        required
      />
      </form>
      <div className="spacer-30"></div>

      <Button
        color={"primary-bg"}
        textColor={"white-text"}
        text={"Add Book"}
        onClick={() => addBookHandler()}
      />
    
    </div>
  );
};

export default BookForm;