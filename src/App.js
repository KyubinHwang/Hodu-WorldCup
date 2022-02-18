import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./startpage";
import VsPage from "./vspage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartPage/>} />
        <Route path="/vs" element={<VsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
