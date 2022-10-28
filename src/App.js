import logo from "./logo.svg";
import "./App.css";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import Header from "./components/Header";
import About from "./components/About";
import { Link } from "react-router-dom";
import { useState, createContext } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const feedbackContext = createContext();

function App() {
  const [feedbackList, setFeedbackList] = useState([
    {
      id: 0,
      rating: 5,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, asperiores.",
    },
    {
      id: 1,
      rating: 7,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, soluta repudiandae similique nihil alias mollitia amet.",
    },

    {
      id: 4,
      rating: 6,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate facere iste dicta dolores, eum nisi!",
    },
  ]);

  return (
    <>
      <feedbackContext.Provider value={{ feedbackList, setFeedbackList }}>
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
