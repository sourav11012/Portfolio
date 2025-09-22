import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Footer from "./pages/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme] = useTheme();

  return (
    <div>
      <div id={theme} className="background">
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />

          <Education />

          <Techstack />

          <Projects />

          <Contact />
        </div>
        <Footer />
        {/* <div className="footer pb-3 ms-3">
        
          <h4 className="text-center">Sourav Shetye &copy; 2024</h4>
          
        </div> */}
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </div>
  );
}

export default App;
