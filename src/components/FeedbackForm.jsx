import React from "react";
import Container from "@mui/material/Container";
import { useState, useContext } from "react";

import { feedbackContext } from "../App";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#00FFFF",
  },
  "& .MuiRating-iconEmpty": {
    color: "#FFFFFF",
  },
  "& .MuiRating-iconHover": {
    color: "#AAFFFF",
  },
});

function FeedbackForm() {
  const { feedbackList, setFeedbackList, addFeedback } =
    useContext(feedbackContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);
  const [lengthMessage, setLengthMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleTextChange = (e) => {
    if (e.target.value === "") {
      setIsDisabled(true);
      setLengthMessage("");
    } else if (e.target.value.trim().length < 10) {
      setLengthMessage("Please enter at least 10 characters.");
      setIsDisabled(true);
    } else {
      setLengthMessage("");
      setIsDisabled(false);
    }

    setText(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    addFeedback(text, rating);
  };
  return (
    <Container maxWidth="sm">
      <form action="">
        <h3>Leave a Review!</h3>
        <div className="points">
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <StyledRating
              name="customized-10"
              defaultValue={7}
              max={10}
              onChange={handleRatingChange}
              icon={<FavoriteIcon color="" />}
              emptyIcon={<FavoriteBorderIcon color="#FFFFFF" />}
            />
          </Box>
        </div>
        <div className="input-group">
          <input
            type="text"
            className="inputText"
            placeholder="Write here"
            onChange={handleTextChange}
          />
          <button
            type="submit"
            className="btn"
            disabled={isDisabled}
            onClick={handleClick}
          >
            Send
          </button>
        </div>
        {lengthMessage}
      </form>
    </Container>
  );
}

export default FeedbackForm;
