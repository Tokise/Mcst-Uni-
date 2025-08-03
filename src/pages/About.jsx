import { useEffect } from "react";
import statsImg from "../assets/images/statistics.jpg";
import philosophyImg from "../assets/images/mcst-philosophy.jpg";
import missionImg from "../assets/images/mcst-mission.jpg";
import visionImg from "../assets/images/mcst-vision.jpg";
import coreValuesImg from "../assets/images/mcst-values.jpg";
import goalsImg from "../assets/images/mcst-goals.jpg";
import "./../styles/About.css";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Sections data
  const sections = [
    {
      title: (
        <>
          Discover Our Impact: Key Statistics at <br />
          <span>Mandaluyong College of Science and Technology</span>
        </>
      ),
      description:
        "At MCST, we pride ourselves on our vibrant community. Our commitment to excellence is reflected in our impressive statistics.",
      image: statsImg,
      stats: [
        { number: "420+", text: "Students enrolled in diverse academic programs." },
        { number: "20+", text: "Dedicated faculty and staff supporting student success." },
      ],
    },
    {
      title: "Philosophy",
      description:
        "Mandaluyong College of Science and Technology advocates the culture of excellence in science and technology that is anchored on the principles of quality instruction, dynamic research and innovation, continuous improvement, public service, and nationalism.",
      image: philosophyImg,
    },
    {
      title: "Mission",
      description:
        "To cultivate a culture of excellence in Science and Technology pursuing the improvement of the quality of life of every Mandaleño to bring about the city's sustainable development and resiliency towards nation building.",
      image: missionImg,
    },
    {
      title: "Vision",
      description:
        "A college of distinction in Science and Technology committed to produce high caliber and employable graduates.",
      image: visionImg,
    },
    {
      title: "Core Values",
      list: [
        "Naglilingkod: Genuine service to the general public.",
        "Kumakalinga: Caring and nurturing people, the environment, and the country.",
        "Disiplinado: Integrity anchored on responsibility and accountability.",
        "Gawa Hindi Salita: Known for actions rather than words.",
        "Makabansa: High sense of nationalism and concern for the greater good.",
        "Kahusayan: Academic excellence, effective governance, and leadership.",
      ],
      image: coreValuesImg,
    },
    {
      title: "Goals",
      list: [
        "Provide Mandaleño access to quality higher education.",
        "Support optimum advancement in instruction, technology, research, innovation, and resource generation.",
        "Collaborate with various educational, technical, and professional stakeholders for genuine public service.",
        "Foster institutional effectiveness and efficiency for continuous improvement and total quality management.",
        "Produce graduates who are locally and internationally competent with a high sense of nationalism.",
      ],
      image: goalsImg,
    },
  ];

  return (
    <>
      {sections.map((section, index) => {
        const isReversed = index % 2 !== 0; // alternate layout
        return (
          <section
            className={`about-main-container ${isReversed ? "reverse" : ""}`}
            key={index}
          >
            <div className="about-content animate-on-scroll slide-left">
              <h2 className="about-title">{section.title}</h2>

              {section.description && (
                <p className="about-description">{section.description}</p>
              )}

              {section.list && (
                <ul className="about-description core-values">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {section.stats && (
                <div className="stats-container">
                  {section.stats.map((stat, i) => (
                    <div className="stat-card animate-on-scroll fade-up" key={i}>
                      <h3>{stat.number}</h3>
                      <p>{stat.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="about-image animate-on-scroll slide-right">
              <img src={section.image} alt={section.title} />
            </div>
          </section>
        );
      })}
      
      <ScrollToTopButton/>
    </>
  );

}
