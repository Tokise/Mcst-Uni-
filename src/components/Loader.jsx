import logo from "../assets/images/mcst-logo.png";
import "../styles/Loader.css";

export default function Loader() {
  return (
    <div className="loader-bg">
      <img src={logo} alt="MCST Logo" className="loader-logo" />
    </div>
  );
}
