import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
        Home
      </Link>
      |
      <Link style={{ textDecoration: "none", color: "#fff" }} to="/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  // background: "#333",
  background: "#2dce89",
  borderColor: "rgba(0, 0, 0, .04)!important",
  color: "#fff",
  padding: "10px",
  textAlign: "center",
};

export default Header;
