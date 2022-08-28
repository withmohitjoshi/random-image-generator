import React, { useContext, useEffect } from "react";
import { ImageDownloadUrlContext } from "../App";
import "../Styles/ImageContainer.css";
function ImageContainer(props) {
  const imageDownloadUrl = useContext(ImageDownloadUrlContext);
  return (
    <>
      <div className="image-container" id="image-container">
        {props.hasError == false ? (
          props.loading == true ? (
            <p>Loading ...</p>
          ) : (
            <img src={imageDownloadUrl} id="loaded-image" />
          )
        ) : (
          <p>Something went wrong</p>
        )}
      </div>
    </>
  );
}

export default ImageContainer;
