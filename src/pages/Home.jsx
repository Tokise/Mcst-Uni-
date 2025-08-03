import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import ScrollToTopButton from "../components/ScrollToTopButton";
import mcstImg from "../assets/images/feature.jpg";
import collabIcon from "../assets/icons/collaboration.svg";
import improveIcon from "../assets/icons/improve.svg";
import researchIcon from "../assets/icons/research.svg";
import mcstofficeImg from "../assets/images/office.jpg";
import bsn from "../assets/images/bsn.jpg";
import publicAd from "../assets/images/public-ad.jpg";
import pe from "../assets/images/pe.jpg";

import "./../styles/Home.css";

export default function Home() {
  const stats = [
    { label: "Enrolled Students", value: 420, suffix: "+" },
    { label: "Faculty Members", value: 20, suffix: "+" },
    { label: "Degree Programs", value: 5 },
    { label: "Committed to Excellence", value: 100, suffix: "%" },
  ];

  useEffect(() => {
    // Observe all elements with the animate-on-scroll class
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <HeroSection />

      {/* Stats Section */}
      <section className="stats-section animate-on-scroll slide-up">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h2>{stat.value}{stat.suffix || ""}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Core Values Section */}
      <section className="core-values-section animate-on-scroll slide-left">
        <div className="core-values-content">
          <div className="core-values-text">
            <h2>Core Values That Drive Excellence at MCST</h2>
            <p>
              At MCST, we are committed to genuine public service and fostering care
              within our community. Our core values of <strong>discipline</strong>,
              <strong> action over words</strong>, <strong>nationalism</strong>, and
              <strong> excellence</strong> guide us in shaping responsible and innovative leaders.
            </p>
          </div>
          <div className="core-values-image animate-on-scroll slide-right">
            <img src={mcstImg} alt="MCST Core Values" />
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="commitment-section animate-on-scroll fade-up">
        <h2>Our Commitment to Quality Education and Innovation</h2>
        <p>
          At MCST, we strive to provide accessible, high-quality education that empowers our students.
        </p>
        <div className="commitment-cards">
          <div className="commit-card animate-on-scroll slide-up">
            <img src={collabIcon} alt="Collaboration" />
            <h3>Collaborating for a Brighter Future</h3>
            <p>We actively collaborate with stakeholders to enhance educational outcomes.</p>
          </div>
          <div className="commit-card animate-on-scroll slide-up">
            <img src={improveIcon} alt="Improvement" />
            <h3>Continuous Improvement in Education</h3>
            <p>Our focus on continuous improvement drives us to innovate and adapt.</p>
          </div>
          <div className="commit-card animate-on-scroll slide-up">
            <img src={researchIcon} alt="Research" />
            <h3>Fostering Excellence in Research and Instruction</h3>
            <p>We prioritize research initiatives that contribute to societal development.</p>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="news-section animate-on-scroll fade-up">
        <h2>News and Events</h2>
        <p>Explore our latest articles and updates.</p>
        <div className="news-cards">
          {/* News Card 1 */}
          <a
            href="https://www.facebook.com/MandaluyongCST/posts/pfbid05LLiiFx9PabqCUTkdzQrHRF17BT9ThGFLqvbuJNn5bQNgY18CDzhyDnrSwrbGHrhl?rdid=WIoi9E4sLq542YFZ#"
            target="_blank"
            rel="noopener noreferrer"
            className="news-card animate-on-scroll slide-up"
          >
            <img src={bsn} alt="News 1" />
            <div className="news-content">
              <h3>Bachelor of Science in Nursing Open for Admission</h3>
              <p>Nursing education teaches healing while fostering compassion, resilience, and a strong commitment to serving others with kindness and hope.</p>
            </div>
            <div className="announcement">Announcement</div>
          </a>

          {/* News Card 2 */}
          <a
            href="https://www.facebook.com/MandaluyongCST/posts/pfbid02Tp54auHx4FFtLZ13g4LEDSGDTU64vWi6vMC8GtXkTaDmRBKYcwfnLjSFbw8GHMbxl?rdid=XHWxvTQIOforZ6bK#"
            target="_blank"
            rel="noopener noreferrer"
            className="news-card animate-on-scroll slide-up"
          >
            <img src={publicAd} alt="News 2" />
            <div className="news-content">
              <h3>Bachelor of Public Administration</h3>
              <p>Mandaluyong College of Science and Technology now offers Bachelor of Public Administration.</p>
            </div>
            <div className="announcement">Announcement</div>
          </a>

          {/* News Card 3 */}
          <a
            href="https://www.facebook.com/share/p/1DnGrjjwRq/"
            target="_blank"
            rel="noopener noreferrer"
            className="news-card animate-on-scroll slide-up"
          >
            <img src={pe} alt="News 3" />
            <div className="news-content">
              <h3>Bachelor of Physical Education</h3>
              <p>Mandaluyong College of Science and Technology now offers Bachelor of Physical Education.</p>
            </div>
            <div className="announcement">Announcement</div>
          </a>

        </div>

        <div className="view-button">
          <a
            href="https://www.facebook.com/MandaluyongCST"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all"
          >
            View All
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section animate-on-scroll slide-up">
        <h2>Join Us at MCST Today!</h2>
        <p>Take the first step towards a brighter future by applying to MCST.</p>
        <div className="cta-buttons">
          <a href="/apply" className="hero-btn">Apply</a>
          <a href="/about" className="hero-btn">Learn More</a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section animate-on-scroll slide-left">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We're here to assist you with any inquiries</p>
          <div className="contact-item">
            <strong>Email:</strong>
            <p>registrarsoffice@mcst.edu.ph</p>
          </div>
          <div className="contact-item">
            <strong>Phone:</strong>
            <p>(02) 87160352</p>
          </div>
          <div className="contact-item">
            <strong>Office:</strong>
            <p>Welfareville Compound, Mandaluyong City</p>
            <a href="#">Find Us</a>
          </div>
        </div>
        <div className="contact-image animate-on-scroll slide-right">
          <img src={mcstofficeImg} alt="MCST Office" />
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  );
}
