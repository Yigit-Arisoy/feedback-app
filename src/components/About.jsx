import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div style={{ maxWidth: "70%", margin: "auto" }}>
      <p>This feedback app has been made in React. It uses:</p>
      <ul style={{ maxWidth: "350px", textAlign: "center", margin: "auto" }}>
        <li style={{ textAlign: "left" }}>Props</li>
        <li style={{ textAlign: "left" }}>States</li>
        <li style={{ textAlign: "left" }}>Routers</li>
        <li style={{ textAlign: "left" }}>Context</li>
      </ul>
      <p style={{ marginTop: "300px" }}>Yiğit Arısoy - 24.10.2022 16:04</p>
      <Link to="/" className="links" style={{ textDecoration: "none" }}>
        Return Home
      </Link>
    </div>
  );
}

export default About;
