import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/NavBar/Nav.jsx";
import NewHome from "./components/Home/NewHome.jsx";
import Contact from "./components/Contact/Contact.jsx";
import About from "./components/About/About.jsx";
import Review from "./components/Review/Review.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
    </Router>
  );
};

export default App;