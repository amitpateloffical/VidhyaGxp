import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleRight,
  faEnvelopeOpenText,
  faPhone,
  faSignsPost,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    console.log("setIsButtonClicked clicked");
    if (isButtonClicked) {
      setIsButtonClicked(false);
    } else {
      setIsButtonClicked(true);
    }
  };

  return (
    <>
      <div className="header-section">
        <div className="container-fluid">
          <div className="top-nav d-flex pt-2 justify-content-end">
            <div>
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                className="me-3 text-white"
              />
              <span className="text-white fw-bolder">info@vidyagxp.com</span>
            </div>
            <div className="ms-5">
              <FontAwesomeIcon icon={faPhone} className="me-3 text-white" />
              <span className="text-white fw-bolder">+91-8821836528</span>
            </div>
          </div>
        </div>
      </div>

      <div id="responsive-headerdrop">
        {isButtonClicked && (
          <div className="nav-item">
            <div className="m-0">
              <Link className="responsive-item px-4" to="/">
                Home{" "}
              </Link>
              <Link className="responsive-item  px-4" to="/about">
                About{" "}
              </Link>
              <Link className="responsive-item  px-4" to="/services">
                Services
              </Link>
              <Link className="responsive-item  px-4" to="/industries">
                Industries
              </Link>
              <Link className="responsive-item  px-4" to="/features">
                Features
              </Link>
              <Link className="responsive-item  px-4" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="header-item-flex">
          <div className="brand-adjust">
            <Link className="navbar-brand" to="/">
              <img
                src="vidyaGxp_logo.png"
                height="65px"
                width="250px"
                className=""
                alt=""
              />
            </Link>
          </div>
          <div
            className="collapse navbar-collapse pt-3 "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/" activeClassName="active">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  activeClassName="active"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services
                </Link>

                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div>
                    <Link className="dropdown-item" to="/ebmr">
                      e-BMR
                    </Link>
                    <Link className="dropdown-item" to="/elogbook">
                      e-LogBook
                    </Link>
                    <Link className="dropdown-item" to="/lms">
                      LMS
                    </Link>
                    <Link className="dropdown-item" to="/mes">
                      MES
                    </Link>
                    <Link className="dropdown-item" to="/edms">
                      EDMS
                    </Link>
                    <Link className="dropdown-item" to="/eqms">
                      EQMS
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/quality-risk-management"
                    >
                      Quality Risk Management
                    </Link>
                    <Link className="dropdown-item" to="/pharma-audit">
                      Pharma Audit & Remediation
                    </Link>
                    <Link className="dropdown-item" to="/root-cause-analysis">
                      Automated Root Cause Analysis
                    </Link>
                    <Link className="dropdown-item" to="/warehouse-management">
                      Warehouse management system
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/connected-and-integrated-gxp-systems"
                    >
                      Connected & Integrated GXP Systems
                    </Link>
                    <Link className="dropdown-item" to="/ai-assited-pharma">
                      AI-Assisted Pharma 4.0
                    </Link>
                    <Link className="dropdown-item" to="/intelligent-pharma">
                      Intelligent Pharma Manufacturing Factory
                    </Link>
                    <Link className="dropdown-item" to="/gxp-training">
                      GxP Training
                    </Link>
                    <Link className="dropdown-item" to="/rpa">
                      Robotic Process Automation (RPA){" "}
                    </Link>
                    <Link className="dropdown-item" to="/rpa"></Link>
                    <Link className="dropdown-item" to="/rpa">
                      Engineering
                    </Link>{" "}
                    <Link className="dropdown-item" to="/rpa">
                      Qualification & Validation
                    </Link>{" "}
                    <Link className="dropdown-item" to="/rpa">
                      QMS Implementation
                    </Link>{" "}
                    <Link className="dropdown-item" to="/rpa">
                      Technology Transfer and Product Development Support
                    </Link>{" "}
                    <Link className="dropdown-item" to="/rpa">
                      Regulatory Submissions
                    </Link>{" "}
                    <Link className="dropdown-item" to="/rpa">
                      GMP Certification Services
                    </Link>{" "}
                    <Link className="dropdown-item" to="/rpa">
                      Audit
                    </Link>{" "}
                    <Link className="dropdown-item" to="/rpa">
                      Regulated Market Access
                    </Link>
                    <Link className="dropdown-item" to="/rpa">
                      QMS Consulting
                    </Link>
                    <Link className="dropdown-item" to="/rpa">
                      Training
                    </Link>
                  </div>

                  {/* <div className="dropdown-divider"></div> */}
                </div>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/industries"
                  tabIndex="-1"
                  aria-disabled="true"
                  activeClassName="active"
                >
                  Industries
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/features"
                  tabIndex="-1"
                  aria-disabled="true"
                  activeClassName="active"
                >
                  Features
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  tabIndex="-1"
                  aria-disabled="true"
                  activeClassName="active"
                  style={{ width: "90px" }}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleButtonClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </>
  );
}

export default Header;
