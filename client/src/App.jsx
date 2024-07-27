import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from "./Template";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
