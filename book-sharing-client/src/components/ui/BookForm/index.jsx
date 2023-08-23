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

  const handleNameChange = (name) => {
    setCredentials({
      ...credentials,
      picture: name,
    });
  };
  const handleAuthorChange = (author) => {
    setCredentials({
      ...credentials,
      author: author,
    });
  };
  const handleShortReviewChange = (shortReview) => {
    setCredentials({
      ...credentials,
      shortReview: shortReview,
    });
  }; const handleFileChange = (picture) => {
    setCredentials({
      ...credentials,
      picture: picture,
    });
  };
console.log(credentials);
  const addBookHandler = async () => {
    try {
      const token = localStorageAction("access_token");
    
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      console.log(credentials);
      const response = await sendRequest({
        method: "post",
        route: "http://127.0.0.1:8000/books/add",
        body: JSON.stringify(credentials),
        headers: headers,
      });
      console.log(response);

      // localStorageAction("access_token", response.authorisation.token);
      
      // navigation("/posts");

    } catch (error) {
      console.log(error);
      setError(error.message);
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
      <InputFile
        id="myfile"
        name="picture"
        onChange={handleFileChange}
        placeholder="Add picture.."
        required
      />
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