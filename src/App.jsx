import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  SmoothScroll,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <SmoothScroll speed={0.03}>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>

          <About />
          <Experience />
          {/* <Tech /> */}
          <Works />
          <Feedbacks />

          <div className="relative z-0">
            <Contact />
            {/* <StarsCanvas /> */}
          </div>
        </div>
      {/* Footer Component */}
      <div className="relative b-12 h-36 z-0">

          <Footer />
      </div>
      </SmoothScroll>
    </BrowserRouter>
  );
};

export default App;
