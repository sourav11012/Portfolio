import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Footer from "./pages/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import AIWork from "./pages/AIWork/AIWork";
import Spotlight from "./pages/Spotlight/Spotlight";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <ToastContainer position="bottom-right" />
      <Navbar />
      <main>
        <Home />
        <About />
        <AIWork />
        <Spotlight />
        <Projects />
        <Techstack />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop
        smooth
        className="scroll-to-top-btn"
        color="#faf7f1"
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}

export default App;
