import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";

import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";

function App() {
  return (
    <div>
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Projects />
        <Contact />
      </div>
      <div className="footer pb-3 ms-3">
        {/* <Tada> */}
        <h4 className="text-center">Sourav Shetye &copy; 2024</h4>
        {/* </Tada> */}
      </div>
    </div>
  );
}

export default App;
