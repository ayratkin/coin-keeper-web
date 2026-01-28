import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import MockPage from "../pages/mock.tsx";
import HomePage from "../pages/home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/mock" element={<MockPage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
