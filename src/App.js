import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header";
import BottomNav from "./Components/BottomNav";
import ImageContainer from "./Components/ImageContainer";
import getImage from "./getImage";

export const ImageDownloadUrlContext = React.createContext();

function App() {
  const [hasError, setHasError] = useState(false);
  const [imageDownloadUrl, setImageDownloadUrl] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getImage()
      .then((res) => {
        setImageDownloadUrl(res.data.download_url);
        setHasError(false);
      })
      .catch((error) => {
        setHasError(true);
      });
  }, []);
  return (
    <>
      <div className="app">
        <header>
          <Header />
        </header>
        {imageDownloadUrl ? (
          <ImageDownloadUrlContext.Provider value={imageDownloadUrl}>
            <ImageContainer hasError={hasError} loading={loading} />
            <footer>
              <BottomNav
                setImageDownloadUrl={setImageDownloadUrl}
                setHasError={setHasError}
                setLoading={setLoading}
              />
            </footer>
          </ImageDownloadUrlContext.Provider>
        ) : (
          <>
            <ImageDownloadUrlContext.Provider value={imageDownloadUrl}>
              <ImageContainer hasError={hasError} loading={loading} />
              <footer>
                <BottomNav
                  setImageDownloadUrl={setImageDownloadUrl}
                  setHasError={setHasError}
                  setLoading={setLoading}
                />
              </footer>
            </ImageDownloadUrlContext.Provider>
          </>
        )}
      </div>
    </>
  );
}

export default App;
