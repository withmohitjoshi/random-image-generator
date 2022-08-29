import React, { useEffect, useReducer, useState } from "react";
import Header from "./Components/Header";
import BottomNav from "./Components/BottomNav";
import ImageContainer from "./Components/ImageContainer";
import getImage from "./getImage";
import "./App.css"
export const ImageDownloadUrlContext = React.createContext(
  "https://picsum.photos/id/7/info"
);

const initalState = {
  hasError: false,
  imageDownloadUrl: "",
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setImageDownloadUrl":
      return { ...state, imageDownloadUrl: action.value };
    case "setHasError":
      return { ...state, hasError: action.value };
    case "setLoading":
      return { ...state, loading: action.value };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);
  useEffect(() => {
    getImage()
      .then((res) => {
        dispatch({ type: "setImageDownloadUrl", value: res.data.download_url });
        dispatch({ type: "setHasError", value: false });
      })
      .catch((error) => {
        dispatch({ type: "setHasError", value: true });
      });
  }, []);

  return (
    <>
      <div className="App">
        <ImageDownloadUrlContext.Provider value={state.imageDownloadUrl}>
          <Header />
          <ImageContainer hasError={state.hasError} loading={state.loading} />
          <BottomNav
            handler={{
              setImageDownloadUrl: (value) => {
                dispatch({
                  type: "setImageDownloadUrl",
                  value: value,
                });
              },
              setHasError: (value) =>
                dispatch({
                  type: "setHasError",
                  value: value,
                }),
              setLoading: (value) =>
                dispatch({
                  type: "setLoading",
                  value: value,
                }),
            }}
          />
        </ImageDownloadUrlContext.Provider>
      </div>
    </>
  );
}

export default App;
