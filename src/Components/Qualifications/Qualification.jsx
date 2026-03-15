// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Qualifications.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div id="qualification" className="qualification-section">
      <div className="qualification-title">
        <h1>Qualifications</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <h1 className="section-subtitle">My personal journey</h1>

      <div className="qualification-container">
        <div className="qualification-buttons">
          <div className={
            toggleState === 1
              ? "qualification-button qualification__active"
              : "qualification-button"
          } onClick={() => toggleTab(1)}
          >
            <FontAwesomeIcon className="graduation-cap" icon={faGraduationCap} /> Education

          </div>
          <div className={
            toggleState === 2
              ? "qualification-button qualification__active"
              : "qualification-button"
          } onClick={() => toggleTab(2)}>

            <FontAwesomeIcon className="briefcase-alt" icon={faBriefcase} /> Experience
          </div>
        </div>

        <div className="qualification-sections">
          <div
            className={
              toggleState === 1
                ? "qualification-content qualification__content-active"
                : "qualification-content"
            } >

            <div className="qualification-data">
              <div>
                <div className="qualification_title"><h3>Bachelors In Computer Applications</h3></div>
                <span className="qualification-subtitle">INDIA - Veer Narmab South Gujarat University </span>
                <div className="qualification-calendar">
                  <FontAwesomeIcon className="calendar" icon={faCalendarAlt} /> JUNE 2019 - MAY 2022
                </div>
              </div>
              <div>
                <span className="qualification-round cech"></span>
                <span className="qualification-line"></span>

              </div>
            </div>
            <div className="qualification-data">
              <div></div>

              <div>
                <span className="qualification-round cech"></span>
                {/* <span className="qualification-line"></span> */}
              </div>

              <div>
                <div className="qualification_title"><h3>Msc In Computer Science & Technology</h3></div>
                <span className="qualification-subtitle"> England- Ulster University Of Birmingham Campus  </span>
                <div className="qualification-calendar">
                  <FontAwesomeIcon className="calendar" icon={faCalendarAlt} /> SEP 2024 - OCT 2025
                </div>
              </div>

            </div>


          </div>

          <div className={
            toggleState === 2
              ? "qualification-content qualification__content-active"
              : "qualification-content"
          }>
            <div className="qualification-data">
              <div>
                <div className="qualification_title"><h3>Frontend Developer</h3></div>
                <span className="qualification-subtitle">YRHP SOFTWARE SOLUTION INDIA</span>
                <div className="qualification-calendar">
                  <FontAwesomeIcon className="calendar" icon={faCalendarAlt} /> JULY 2022 - JULY 2023
                </div>
              </div>
              <div>
                <span className="qualification-round fifth-third"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>

              <div>
                <span className="qualification-round fifth-third"></span>
                <span className="qualification-line"></span>
              </div>

              <div>
                <div className="qualification_title"><h3>Warehouse Operator</h3></div>
                <span className="qualification-subtitle">AMAZON UK-PART TIME</span>
                <div className="qualification-calendar">
                  <FontAwesomeIcon className="calendar" icon={faCalendarAlt} /> NOV 2025 - JAN 2025
                </div>
              </div>
            </div>

            <div className="qualification-data">
              <div>
                <div className="qualification_title"><h3>React.js Developer</h3></div>
                <span className="qualification-subtitle">BRONZER-INTRIO [Apprenticeship]</span>
                <div className="qualification-calendar">
                  <FontAwesomeIcon className="calendar" icon={faCalendarAlt} /> FEB 2025 - Feb 2025
                </div>
              </div>
              <div>
                <span className="qualification-round cech"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>

              <div>
                <span className="qualification-round orange-is-better"></span>
                <span className="qualification-line"></span>
              </div>

              <div>
                <div className="qualification_title"><h3>Warehouse Specialist</h3></div>
                <span className="qualification-subtitle">EVRI - Uk Part time</span>
                <div className="qualification-calendar">
                  <FontAwesomeIcon className="calendar" icon={faCalendarAlt} /> Mar 2025 - JUNE 2025
                </div>
              </div>
            </div>


            <div className="qualification-data">
              <div>
                <div className="qualification_title"><h3>Store Manager And Post Officer</h3></div>
                <span className="qualification-subtitle">HARRY'S EXPRESS LTD - Part time</span>
                <div className="qualification-calendar">
                  <FontAwesomeIcon className="calendar" icon={faCalendarAlt} /> JULY 2025 - FEB 2026
                </div>
              </div>
              <div>
                <span className="qualification-round cech"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>

              <div>
                <span className="qualification-round uc-health"></span>
                <span className="qualification-line"></span>
              </div>

              <div>
                <div className="qualification_title"><h3>Tesco UK</h3></div>
                <span className="qualification-subtitle">WAREHOUSE OPERATOR - Full time</span>
                <div className="qualification-calendar">
                  <FontAwesomeIcon className="calendar" icon={faCalendarAlt} /> MARCH 2026 - PRESENT
                </div>
              </div>
            </div>
           

          </div>
        </div>

      </div>
    </div>
  )
}

export default Qualification
