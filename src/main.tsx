import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppWrapper from "src/components/organisms/AppWrapper";
import Layout from "src/components/molecules/Layout";
import Home from "src/routes/Home";

import "src/assets/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/elo" element={<>Siemano</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  </React.StrictMode>
);
