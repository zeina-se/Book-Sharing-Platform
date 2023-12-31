import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./style.css";
import Input from "../../../base/Input";
import { localStorageAction } from "../../../../core/config/localstorage";


export default function Navbar() {
  const [username, setUsername] = useState("Taha");
  const location = useLocation();
  const navigation = useNavigate();

  const [show, setShow] = useState(true);

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect(() => {
    console.log(location);
    if (location.pathname === "/") {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [location.pathname]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    handleSearchSubmit();
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    // Perform book search logic here using an API or database
    try {
      const response = await fetch(`https://api.example.com/books?q=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error occurred during book search:", error);
    }

    setSearchQuery("");
  };

  return (
    show && (
    <nav className="navigation">
      <a href="/" className="brand-name">
        MacroBook
      </a>

      <div className="search-container">
    
        <Input
        type="text"
        placeholder={"Search books..."}
        value={searchQuery}
        size="LargeWidth"
        onChange={handleSearchInputChange}
      />
          
      </div>

      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      ></button>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/Profile">${localStorage.getItem("first_name")}</a>
          </li>
         
        </ul>
      </div>

      {/* Display search results */}
      {searchResults.length > 0 && (
        <div className="search-results">
          <h3>Search Results</h3>
          <ul>
            {searchResults.map((book) => (
              <li key={book.id}>{book.title}</li>
            ))}
          </ul>
        </div>
      )}
    </nav>)
  );
}