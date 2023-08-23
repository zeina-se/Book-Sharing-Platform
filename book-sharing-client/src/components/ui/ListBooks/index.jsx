import React, { useState } from "react";
import Button from "../../base/Button";
import BookForm from "../BookForm";

const ListBooks = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleAddBookClick = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div>
      {isFormVisible ? (
        // Render the form component when isFormVisible is true
        <BookForm />
      ) : (
        // Render the button when isFormVisible is false
        <Button
          color={"primary-bg"}
          textColor={"white-text"}
          text={"Add book"}
          padding={"medium"}
          onClick={handleAddBookClick}
        />
      )}
    </div>
  );
};

export default ListBooks;