import React from "react";
import "../Styles/Header.css";
function Header() {
  return (
    <header className="header" id="header">
      <h1>Random Images</h1>
    </header>
  );
}

export default React.memo(Header);
