import { Routes, Route } from "react-router-dom";
import Header from "./components/pages/Header";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
