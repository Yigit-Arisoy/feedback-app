import React from "react";
import Container from "@mui/material/Container";
import { FaTimes } from "react-icons/fa";
import "./item.css";

function FeedbackItem({ feedback, deleteFeedback }) {
  const handleClick = () => {
    deleteFeedback(feedback.id);
  };
  return (
    <div className="App">
      <div className="test">
        <div className="rating">{feedback.rating}</div>
        <button
          style={{
            position: "absolute",
            right: "10px",
            top: "10px",
            width: "20px",
            height: "20px",
            margin: "0",
            padding: "0",
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          <FaTimes></FaTimes>
        </button>

        <Container
          sx={{ paddingTop: "20px", paddingBottom: "20px" }}
          maxWidth="80%"
        >
          {feedback.text}
        </Container>
      </div>
    </div>
  );
}

export default FeedbackItem;
