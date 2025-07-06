import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SetupTOTP from "./SetupTOTP";
import { BrowserRouter, Routes, Route } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/setup_totp" element={<SetupTOTP />} />
    </Routes>
  </BrowserRouter>,
);
