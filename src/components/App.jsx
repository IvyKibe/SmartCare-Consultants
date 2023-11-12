import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Service";
import Login from "./Login";
import "../styles/App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <h1>SmartCare Consultants</h1>
        <NavBar setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/services"
            element={<Service loggedIn={loggedIn} />} // Pass loggedIn as a prop
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={<Login setLoggedIn={setLoggedIn} loggedIn={loggedIn} />} // Pass loggedIn as a prop
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
