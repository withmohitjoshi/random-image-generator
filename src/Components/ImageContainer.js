import React, { useEffect } from "react";
import "../Styles/ImageContainer.css";
function ImageContainer() {
  return (
    <>
      <div className="image-container" id="image-container">
        <img src="https://picsum.photos/800" />
      </div>
    </>
  );
}

export default ImageContainer;
