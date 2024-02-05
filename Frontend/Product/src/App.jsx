import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FetchedProduct from "./pages/FetchedProduct.jsx";
import Login from "./pages/Login.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FetchedProduct />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
