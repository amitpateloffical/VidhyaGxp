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
import MultilevelDropdown from 'react-multilevel-dropdown';

function Header() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
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
                Home
              </Link>
              <Link className="responsive-item px-4" to="/about">
                About
              </Link>
              <Link className="responsive-item px-4" to="/services">
                Services
              </Link>
              <Link className="responsive-item px-4" to="/industries">
                Industries
              </Link>
              <Link className="responsive-item px-4" to="/features">
                Features
              </Link>
              <Link className="responsive-item px-4" to="/contact">
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
            className="collapse navbar-collapse pt-3"
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
              <li className="nav-item" style={{ padding: "0px" }}>
                <MultilevelDropdown
                  title="Services"
                  menuClassName="dropdown-menu"
                  buttonClassName="nav-link dropdown-toggle"
                  arrowClassName="caret"
                >
                  <MultilevelDropdown.Item style={{ padding: "0px" }}>
                    <Link className="dropdown-item" to="/ebmr">
                      e-BMR
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px" }}>
                    <Link className="dropdown-item" to="/elogbook">
                      e-LogBook
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px" }}>
                    <Link className="dropdown-item" to="/lms">
                      LMS
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px" }}>
                    <Link className="dropdown-item" to="/mes">
                      MES
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px" }}>
                    <Link className="dropdown-item" to="/edms">
                      EDMS
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px" }}>
                    <Link className="dropdown-item" to="/eqms">
                      EQMS
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px" }}>
                    <Link className="dropdown-item" to="/quality-risk-management">
                      Quality Risk Management
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px" }}>
                    <Link className="dropdown-item" to="/pharma-audit">
                      Pharma Audit & Remediation
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px" }}>
                    <Link className="dropdown-item" to="/root-cause-analysis">
                      Automated Root Cause Analysis
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px" }}>
                    <Link className="dropdown-item" to="/warehouse-management">
                      Warehouse management system
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px" }}>
                    <Link className="dropdown-item" to="/connected-and-integrated-gxp-systems">
                      Connected & Integrated GXP Systems
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px" }}>
                    <Link className="dropdown-item" to="/ai-assited-pharma">
                      AI-Assisted Pharma 4.0
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px" }}>
                    <Link className="dropdown-item" to="/intelligent-pharma">
                      Intelligent Pharma Manufacturing Factory
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px" }}>
                    <Link className="dropdown-item" to="/gxp-training">
                      GxP Training
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px" }}>
                    <Link className="dropdown-item" to="/rpa">
                      Robotic Process Automation (RPA)
                    </Link>
                  </MultilevelDropdown.Item >
                  <MultilevelDropdown.Item style={{ padding: "0px" }} title="Engineering">
                    <Link className="dropdown-item" to="#">
                      Engineering
                    </Link>
                    <MultilevelDropdown.Submenu className="dropdown-submenu">
                    <MultilevelDropdown.Item style={{ padding: "0px" , top: "0px" }}>
                        <Link className="dropdown-item" to="/feasibility-studies">
                          Feasibility Studies
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px" }}>
                        <Link className="dropdown-item" to="/site-selection">
                          Site Selection
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px" }}>
                        <Link className="dropdown-item" to="/facility-design">
                          Facility Design and Layout
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px" }}>
                        <Link className="dropdown-item" to="/design-risk-assessment">
                          Design Risk Assessment
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px" }}>
                        <Link className="dropdown-item" to="/detailed-engineering-design">
                          Detailed Engineering Design
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px" }}>
                        <Link className="dropdown-item" to="/regulatory-compliance">
                          Regulatory Compliance
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px" }}>
                        <Link className="dropdown-item" to="/project-management">
                          Project Management
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px" }}>
                        <Link className="dropdown-item" to="/technology-equipment-selection">
                          Technology and Equipment Selection
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px" }}>
                        <Link className="dropdown-item" to="/commissioning">
                          Commissioning and Qualification
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px" }}>
                        <Link className="dropdown-item" to="/quality-assurance">
                          Quality Assurance and Control
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px" }}>
                        <Link className="dropdown-item" to="/training-capacity-building">
                          Training and Capacity Building
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px" }}>
                        <Link className="dropdown-item" to="/contractual-closeout">
                          Contractual Closeout
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px" }}>
                        <Link className="dropdown-item" to="/post-project-review">
                          Post Project Review
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px" }}>
                        <Link className="dropdown-item" to="/supply-chain-management">
                          Supply Chain Management
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px" }}>
                        <Link className="dropdown-item" to="/financial-analysis">
                          Financial Analysis and Business Planning
                        </Link>
                      </MultilevelDropdown.Item>
                    </MultilevelDropdown.Submenu>
                  </MultilevelDropdown.Item>
                </MultilevelDropdown>
              </li>

              <li className="nav-item" >
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
