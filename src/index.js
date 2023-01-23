import React from "react";
import ReactDOM from "react-dom/client";
import "./utilities/_reset.scss";
import "./index.scss";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="about" element={<App />} />
        <Route path="discover" element={<App />} />
        <Route path="get-started" element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

