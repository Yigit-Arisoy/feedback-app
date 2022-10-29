import logo from "./logo.svg";
import "./App.css";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import Header from "./components/Header";
import About from "./components/About";
import { Link } from "react-router-dom";
import { useState, createContext, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const feedbackContext = createContext();

function App() {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch("http://localhost:5000/feedback");
    const data = await response.json();

    setFeedbackList(data);

    console.log(data);
  };

  const addFeedback = async (text, rating) => {
    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating, text }),
    });

    const data = await response.json();

    console.log(data);

    setFeedbackList([data, ...feedbackList]);
  };

  return (
    <>
      <feedbackContext.Provider
        value={{ feedbackList, setFeedbackList, addFeedback }}
      >
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm></FeedbackForm>
                  <FeedbackList></FeedbackList>
                  <Link
                    to="/about"
                    className="links"
                    style={{ textDecoration: "none" }}
                  >
                    About
                  </Link>
                </>
              }
            ></Route>

            <Route path="/about" element={<About />}></Route>
            <Route
              path="/*"
              element={
                <>
                  {" "}
                  <p> You are wondering off the trail</p>
                  <Link
                    to="/"
                    className="links"
                    style={{ textDecoration: "none" }}
                  >
                    Go back
                  </Link>
                </>
              }
            ></Route>
          </Routes>
        </Router>
      </feedbackContext.Provider>
    </>
  );
}

export default App;
