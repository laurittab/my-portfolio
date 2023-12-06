import React from "react";
//import features from Material UI libraries
import { Box, Grid } from "@mui/material";
//import components
import MainBox from "./components/MainBox.jsx";
// Import and apply CSS stylesheet
import "./styles/styles.css";
// Home function that is reflected across the site
export default function App() {
  /*only works when rerender screen*/
  function getStyling() {
    if (window.innerWidth < 600) return "550vh";
    else return "150vh";
  }
  const styles = {
    backgroundColor: "rgb(255, 255, 230)",
    paddingLeft: "20px",
    fontFamily: "Roboto, sans-serif",
    height: getStyling(),
  };

  return (
    <div style={styles}>
      <MainBox />
    </div>
  );
}
