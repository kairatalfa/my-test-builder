import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Option from "./components/Option";

import Question from "./components/Question";
import Start from "./components/Start";
import TwoOption from "./componetnTwoOption/TwoOption";

export default function App() {
  return (
    <>
      <Header />
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/Option" element={<Option />} />
            <Route path="/Question" element={<Question />} />
            <Route path="/TwoOption" element={<TwoOption />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
