import { Route,Routes } from "react-router-dom";
import "./index.css"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/hakkimizda" element={<About />}/>
        <Route path="/hizmetlerimiz" element={<Services />}/>
        <Route path="/iletisim" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
