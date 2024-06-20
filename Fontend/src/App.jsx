import { BrowserRouter, Route, Routes } from "react-router-dom";
import {lazy,Suspense} from 'react'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Loader from './pages/Loader'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const SingUp = lazy(() => import("./pages/SingUp"));
const MyCourses = lazy(() => import("./pages/profile/MyCourses"));
const ProtectedRoute = lazy(() => import("./components/ProtactedRoute"));
const ForgetPassword = lazy(() => import("./pages/profile/ForgetPassword"));
const Courses = lazy(() => import("./pages/Courses"));
const CourseDetail = lazy(() => import("./pages/CourseDetail"));

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<ProtectedRoute />}>
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="forget-password" element={<ForgetPassword />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/singUp" element={<SingUp />} />
        <Route path="/course-details/:courseId" element={<CourseDetail />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
    <Footer />
  </BrowserRouter>
);

export default App;
