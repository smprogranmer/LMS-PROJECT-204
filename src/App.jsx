import { Suspense, useState } from "react";
import Spline from "@splinetool/react-spline";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loader from "./pages/Loader/Loader";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
function App() {

  return (
    <Router>
      {/* Header  */}
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
