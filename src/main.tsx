import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppWrapper from "src/components/organisms/AppWrapper";
import Layout from "src/components/molecules/Layout";
import Home from "src/routes/Home";
import Channels from "src/routes/Channels";
import Channel from "src/routes/Channel";

import "src/assets/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/channels" element={<Channels />} />
            <Route path="/channel/:id" element={<Channel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  </React.StrictMode>
);
