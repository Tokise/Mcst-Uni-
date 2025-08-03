import "../styles/Home.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Empowering Futures Through Science and Technology</h1>
          <p>
            At Mandaluyong College of Science and Technology, we are committed
            to nurturing excellence in education and innovation. Our programs in
            Information Systems, Mathematics, Communication, Public
            Administration, and Physical Education are designed to equip
            students with the skills needed for a successful future.
          </p>
          <button className="hero-btn">Explore Programs →</button>
        </div>
        <div className="hero-image">
          <img src="src/assets/images/mcst-drone.png" alt="Campus" />
        </div>
      </div>
    </section>
  );
}
