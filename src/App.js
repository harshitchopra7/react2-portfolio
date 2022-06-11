import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import TechStack from "./components/TechStack/TechStack";
import Experience from "./components/Experience/Experience";

// Portfolio Website

// 1. Navbar
// 2. HomePage
// 3. Tech Stack
// 4. Experience
// 5. Projects

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <TechStack />
      <Experience />
    </div>
  );
}

export default App;
