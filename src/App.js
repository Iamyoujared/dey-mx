import "./App.css";
import { Home } from "./components/Home";
import { HowToDo } from "./components/HowToDo";
import { BenefitsStart } from "./components/BenefitsStart";
import { Benefits } from "./components/Benefits";
import { Footer } from "./components/Footer";
import { HardData } from "./components/HardData";
import { GlobalStyles } from "./styles/index";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
      <ScrollToTop smooth color="#f8d05d" top={3000} />
      <GlobalStyles />
      <Home />
      <HardData />
      <HowToDo />
      <BenefitsStart />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
