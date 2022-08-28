import React, { useContext, useEffect } from "react";
import { ImageDownloadUrlContext } from "../App";
import "../Styles/ImageContainer.css";
function ImageContainer({ hasError, loading }) {
  const imageDownloadUrl = useContext(ImageDownloadUrlContext);
  useEffect(() => {
    const imageContainer = document.getElementById("image-container");
    const header = document.getElementById("header");
    const bottomNav = document.getElementById("bottom-nav");
  });
  return (
    <>
      <div className="image-container" id="image-container">
        {hasError == false ? (
          loading == true ? (
            <p>Loading ...</p>
          ) : (
            <img src={imageDownloadUrl} id="loaded-image" />
            // "hello"
          )
        ) : (
          // null
          <p>Something went wrong</p>
        )}
      </div>
    </>
  );
}

export default ImageContainer;
