import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import App from "./components/App";

import "./reset.css";
import "./styles.css";

const root = createRoot(document.querySelector("#root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/project-wordle" />} />
      <Route path="/project-wordle" element={<App />} />
    </Routes>
  </BrowserRouter>
);
