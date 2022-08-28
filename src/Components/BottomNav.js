import FileSaver from "file-saver";
import React, { useContext, useEffect, useState } from "react";
import { ImageDownloadUrlContext } from "../App";
import getImage from "../getImage";
import "../Styles/BottomNav.css";

function BottomNav(props) {
  const imageDownloadUrl = useContext(ImageDownloadUrlContext);
  const [downloadUrl, setDownloadUrl] = useState("");

  useEffect(() => {
    setDownloadUrl(imageDownloadUrl);
  }, [imageDownloadUrl]);

  const handleDownload = () => {
    if (downloadUrl) {
      FileSaver.saveAs(downloadUrl, `image.jpg`);
    }
  };

  return (
    <>
      <div className="bottom-nav" id="bottom-nav">
        <button
          id="new-image-btn"
          onClick={() => {
            props.setLoading(true);

            getImage()
              .then((res) => {
                props.setImageDownloadUrl(res.data.download_url);
                setDownloadUrl(res.data.download_url);
                props.setHasError(false);
                props.setLoading(false);
              })
              .catch((error) => {
                props.setHasError(true);                
              });
          }}
        >
          New Image
        </button>
        <button id="download-image-btn" onClick={handleDownload}>
          Download Image
        </button>
      </div>
    </>
  );
}
export default BottomNav;
