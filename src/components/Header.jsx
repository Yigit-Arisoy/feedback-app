import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/" className="header" style={{ textDecoration: "none" }}>
      Feedback App
    </Link>
  );
}

export default Header;
