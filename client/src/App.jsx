import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Front from "./components/Main/Front";
import AboutPage from "./components/ABOUT/AboutPage";
import FeatClass from "./components/CLASSES/FeatClass.jsx";
import Builder from "./components/CLASSES/Builder.jsx";
import Table from "./components/TIME TABLE/Table.jsx";
import Calculator from "./components/BMI/Calculator.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./AUTHENTICATION/Login.jsx";
import SignUp from "./AUTHENTICATION/SignUp.jsx";
import Class from "./PAGES/CLASS/Class.jsx";
import ClassDetail from "./PAGES/CLASS/ClassDetails.jsx";
import Registration from "./REGISTRATION/Registration.jsx";
import { SharedProvider } from "./CONTEXTAPI/sharedContext.jsx";
import Course from "./PAGES/ACCOUNT/Course.jsx";
import Trainer from "./PAGES/TRAINER/Trainer.jsx";
import TrainerDetails from "./PAGES/TRAINER/TrainerDetails.jsx";
import Connect from "./PAGES/ABOUT/Connect.jsx";
import Daskboard from "./PAGES/DASKBOARD/Daskboard.jsx";

const App = () => {
  return (
    <SharedProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/class" element={<Class />} />
          <Route path="/class/:className" element={<ClassDetail />} />
          <Route path="/class/:className/Registration_form" element={<Registration />} />
          <Route path="/class/:className/course" element={<Course />} />
          <Route path="/trainer" element={<Trainer />} />
          <Route path="/trainer/:name" element={<TrainerDetails />} />
          <Route path="/about" element={<Connect />} />
          <Route path="/daskboard" element={<Daskboard />} />
        </Routes>
      </BrowserRouter>
    </SharedProvider>
  );
}

export default App;

const Home = () => {
  return (
    <>
      <Navbar />
      <Front />
      <AboutPage />
      <FeatClass />
      <Builder />
      <Table />
      <Calculator />
      <Footer />
    </>
  );
}
