import React, { useEffect } from "react";
import "./../styles/Apply.css";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Apply() {
    useEffect(() => {
        const table = document.querySelector(".enrollment-table");
        
        const onScroll = () => {
            const rect = table.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                table.classList.add("show");
                window.removeEventListener("scroll", onScroll);
            }
        };
        
        window.addEventListener("scroll", onScroll);
        onScroll(); // Run once to check if table is already visible
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    
    return (
        <section className="apply-section">
      <h2>Enrollment Procedure (Continuing Students)</h2>
      <p>
        A.Y. 2025-2026 (1st Semester)
        <br />
        <strong>June 16-20, 2025</strong>
      </p>

      {/* Enrollment Procedure */}
      <div className="enrollment-procedure">
        <h3>Requirements</h3>
        <ol>
          <li>Certificate of Registration (2nd Sem: A.Y. 2024-2025)</li>
          <li>Duly Signed Clearance (2nd Sem, A.Y. 2024-2025)</li>
          <li>Program of Study Evaluation Form</li>
        </ol>
        <h3>Procedure</h3>
        <ol>
          <li>
            Submit the signed Clearance and Evaluated Program of Study to the
            Registrar Office.
          </li>
          <li>
            Receive the Certificate of Registration with academic schedule.
          </li>
        </ol>
      </div>

      {/* Enrollment Schedule */}
      <div className="enrollment-schedule">
        <h3>Enrollment Schedule</h3>
        <p>
          A.Y. 2025-2026 (1st Semester)
          <br />
          <strong>June 16, 2025 to July 07, 2025</strong>
        </p>

        <table className="enrollment-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Year Level</th>
              <th>Section</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Date">June 16 - July 07, 2025</td>
              <td data-label="Time">8:00AM - 5:00PM</td>
              <td data-label="Year Level">Incoming 1st Year</td>
              <td data-label="Section">-</td>
            </tr>
            <tr>
              <td data-label="Date">June 16, 2025</td>
              <td data-label="Time">8:00AM - 12:00PM</td>
              <td data-label="Year Level">Incoming 2nd Year</td>
              <td data-label="Section">ABCOMM11 & BSIS11</td>
            </tr>
            <tr>
              <td data-label="Date">June 16, 2025</td>
              <td data-label="Time">1:00PM - 5:00PM</td>
              <td data-label="Year Level">Incoming 2nd Year</td>
              <td data-label="Section">ABCOMM12 & BSIS12</td>
            </tr>
            <tr>
              <td data-label="Date">June 17, 2025</td>
              <td data-label="Time">8:00AM - 12:00PM</td>
              <td data-label="Year Level">Incoming 2nd Year</td>
              <td data-label="Section">ABCOMM13 & BSIS13</td>
            </tr>
            <tr>
              <td data-label="Date">June 17, 2025</td>
              <td data-label="Time">1:00PM - 5:00PM</td>
              <td data-label="Year Level">Incoming 3rd Year</td>
              <td data-label="Section">ABCOMM21 & BSIS21</td>
            </tr>
            <tr>
              <td data-label="Date">June 18, 2025</td>
              <td data-label="Time">8:00AM - 12:00PM</td>
              <td data-label="Year Level">Incoming 3rd Year</td>
              <td data-label="Section">ABCOMM22 & BSIS22</td>
            </tr>
            <tr>
              <td data-label="Date">June 18, 2025</td>
              <td data-label="Time">1:00PM - 5:00PM</td>
              <td data-label="Year Level">Incoming 2nd Year</td>
              <td data-label="Section">BSMATH11</td>
            </tr>
            <tr>
              <td data-label="Date">June 18, 2025</td>
              <td data-label="Time">1:00PM - 5:00PM</td>
              <td data-label="Year Level">Incoming 3rd Year</td>
              <td data-label="Section">BSMATH21</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ScrollToTopButton />
    </section>
  );
}
