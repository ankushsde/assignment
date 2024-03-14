import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./SearchBar.css";
import Alert from "@mui/material/Alert";

function SearchBar() {
  const [searchItem, setSearchedItem] = useState("");
  const [isSearchFilled, setIsSearchFilled] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInput = (event) => {
    const value = event.target.value;
    setSearchedItem(value);
    setIsSearchFilled(!!value.trim());
  };

  const handleButtonClick = () => {
    if (!isSearchFilled) {
      setShowAlert(true);
    }
  };

  return (
    <>
      <div>
        <h1>Weather Forcast</h1>
        <div>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              label="Enter a City"
              id="location"
              color="secondary"
              onChange={handleInput}
            />
          </Box>
          <Link to={isSearchFilled ? `/weather-details/${searchItem}` : "#"}>
            <Button
              variant="contained"
              className={`get-weather-btn ${!isSearchFilled ? "disabled" : ""}`}
              disabled={!isSearchFilled}
              onClick={handleButtonClick}
              sx={{
                backgroundColor: "#4caf50",  
                "&.Mui-disabled": {
                  backgroundColor: "#cccccc",  
                  color: "#666666",  
                },
              }}
            >
              Get Weather
            </Button>{" "}
          </Link>
        </div>
        <Alert
          severity="warning"
          sx={{ display: showAlert ? "block" : "none" }}
        >
          Please enter the location first.
        </Alert>
      </div>
    </>
  );
}

export default SearchBar;
