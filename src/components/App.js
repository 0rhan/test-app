import React from "react";
import TopBar from "./TopBar/TopBar";
import BottomBar from "./BottomBar/BottomBar";
import Content from "./Content/Content";

function App(props) {
  return (
    <>
      <TopBar/>
      <Content/>
      <BottomBar/>
    </>
  );
}

export default App;
