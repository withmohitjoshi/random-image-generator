import React from "react";
import "../Styles/Header.css";
function Header() {
  console.log("header rendering");
  return (
    <header className="header">
      <h1>Random Images</h1>
    </header>
  );
}

export default React.memo(Header);
