import { Route,Routes } from "react-router-dom";
import "./index.css"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/hakkimizda" element={<AboutPage />}/>
        <Route path="/hizmetlerimiz" element={<ServicesPage />}/>
        <Route path="/iletisim" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
