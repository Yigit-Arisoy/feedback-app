import React from "react";
import Container from "@mui/material/Container";
import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { feedbackContext } from "../App";

function FeedbackForm() {
  const { feedbackList, setFeedbackList } = useContext(feedbackContext);
  const [text, setText] = useState("");
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

  const handleClick = (e) => {
    e.preventDefault();

    setFeedbackList([{ rating: 7, text, id: uuidv4() }, ...feedbackList]);
  };
  return (
    <Container maxWidth="sm">
      <form action="">
        <h3>Leave a Review!</h3>
        <div className="input-group">
          <input
            type="text"
            className="input"
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
