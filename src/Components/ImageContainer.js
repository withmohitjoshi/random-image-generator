import React, { useContext, useEffect } from "react";
import { ImageDownloadUrlContext } from "../App";
import "../Styles/ImageContainer.css";
function ImageContainer({ hasError, loading }) {
  const imageDownloadUrl = useContext(ImageDownloadUrlContext);
  return (
    <>
      <div className="image-container" id="image-container">
        {hasError == false ? (
          loading == true ? (
            <p>Loading ...</p>
          ) : (
            <img src={imageDownloadUrl} id="loaded-image" />
          )
        ) : (
          <div style={{textAlign:'center'}}>
          <p>Something went wrong</p>
          <p>Click New Image</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ImageContainer;
