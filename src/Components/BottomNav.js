import React from "react";
import "../Styles/BottomNav.css";
function BottomNav() {
  return (
    <>
      <div className="bottom-nav" id="bottom-nav">
        <button id="new-image-btn">New Image</button>
        <button id="download-image-btn">Download Image</button>
      </div>
    </>
  );
}
export default React.memo(BottomNav);
