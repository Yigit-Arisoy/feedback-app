import React from "react";
import FeedbackItem from "./FeedbackItem";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { feedbackContext } from "../App.js";

function FeedbackList() {
  const { feedbackList, setFeedbackList } = useContext(feedbackContext);
  const deleteFeedback = (id) => {
    setFeedbackList(feedbackList.filter((item) => item.id != id));
  };
  return (
    <div>
      {feedbackList.map((item, index) => (
        <FeedbackItem
          feedback={item}
          deleteFeedback={deleteFeedback}
          key={index}
        ></FeedbackItem>
      ))}
    </div>
  );
}

export default FeedbackList;
