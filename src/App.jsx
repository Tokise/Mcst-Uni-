import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ThemeToggle from "./components/ThemeToggle";
import Apply from "./pages/Apply";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading && <Loader />}
      {!loading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/apply" element={<Apply />} />
          </Routes>
          <ThemeToggle />
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}
