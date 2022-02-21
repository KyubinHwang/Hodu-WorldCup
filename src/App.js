import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./startpage";
import VsPage from "./vspage";
import VsPage16 from "./vs16page";
import VsPage32 from "./vs32page";
import styles from"./app.module.css";

function App() {
  return (
    <div className={styles.skin}>
      <Routes>
        <Route path="/" element={<StartPage/>} />
        <Route path="/vs8" element={<VsPage/>} />
        <Route path="/vs16" element={<VsPage16/>} />
        <Route path="/vs32" element={<VsPage32/>} />
      </Routes>
    </div>
  );
}

export default App;
