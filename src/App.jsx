import React from "react";
import { Routes, Route, HashRouter } from "react-router";
import Home from "./pages/Home";
import Memories from "./pages/Memories";
import NavBar from "./components/NavBar";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memories" element={<Memories />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
