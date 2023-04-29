import React from "react";
import "./App.css";
import Header from "./component/layout/Header/Header.js";
import webfont from "webfontloader";
import Footer from "./component/layout/Footer/Footer.js";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home.js";

const App = () => {
  React.useEffect(() => {
    webfont.load({
      google: {
        families: ["Roboto", "Droid sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
