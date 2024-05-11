import { Suspense, lazy, useState } from "react";
// import Spline from "@splinetool/react-spline";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
const Loader = lazy(()=> import('./pages/Loader'))
const NotFound = lazy(()=> import('./pages/NotFound'))
const Home = lazy(()=> import('./pages/Home'))
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import Footer from "./components/Footer";

// import Spline from "@splinetool/react-spline";
const CourseDetail = lazy(() => import("./pages/CourseDetail"))

function App() {
  return (
    <Router>
      {/* Header  */}
      <Navbar/> 
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/singup" element={<SingUp/>}/>
          {/* <Route path="/hello" element={<Loader/>}/> */}
          <Route path="/courseDetail" element={<CourseDetail/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Suspense>
      <Footer/>
    </Router>
  );
}

export default App;
