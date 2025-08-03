import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ThemeToggle from "./components/ThemeToggle";
import Apply from "./pages/Apply";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
      <ThemeToggle />
      <Footer />
    </BrowserRouter>
  );
}
