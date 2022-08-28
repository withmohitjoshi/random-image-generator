import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header";
import BottomNav from "./Components/BottomNav";
import ImageContainer from "./Components/ImageContainer";

function App() {
  return (
    <>
      <div className="app">
        <header>
          <Header />
        </header>
        <ImageContainer />
        <footer>
          <BottomNav />
        </footer>
      </div>
    </>
  );
}

export default App;
