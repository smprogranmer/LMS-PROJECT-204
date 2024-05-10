<<<<<<< HEAD
import { Suspense, useState } from "react";
import Spline from "@splinetool/react-spline";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loader from "./pages/Loader/Loader";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
function App() {
=======
import "./App.css";

import Banner from "./pages/banner";
import Spline from "@splinetool/react-spline";
>>>>>>> 4bd9f637824b7381d371923b9f2e7d4ad833bddb

function App() {
  return (
<<<<<<< HEAD
    <Router>
      {/* Header  */}
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Suspense>
    </Router>
=======
    <div>
      <Banner />
    </div>
>>>>>>> 4bd9f637824b7381d371923b9f2e7d4ad833bddb
  );
}

export default App;
