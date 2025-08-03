import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Toggle dark mode
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  // Detect scroll to hide toggle
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`theme-toggle ${isVisible ? "show" : "hide"}`}
      onClick={() => setDarkMode(!darkMode)}
      title="Toggle Theme"
    >
      <span>{darkMode ? "☀️" : "🌙"}</span>
    </button>
  );
}
