import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight, faEnvelopeOpenText, faPhone, faSignsPost } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    console.log("setIsButtonClicked clicked")
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
          {/* <div className="container"> */}
            <div className="row">
              <div className="top-nav">
                <div className="d-flex flex-row-reverse justify-end pt-2">
                  <div >
                    <FontAwesomeIcon icon={faEnvelopeOpenText} className="me-3 text-white "  />
                    <span className="text-white fw-bolder">info@VidyaGxP.com</span>
                  </div> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                  <div >
                    <FontAwesomeIcon icon={faPhone} className="me-3 text-white"  />
                    <span className="text-white fw-bolder">+91-8821836528</span>
                  </div>

                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      <div id="responsive-headerdrop">


        {isButtonClicked && (
          <div className="nav-item dropdown">
            <div className="row m-1">
              <Link className="m-2 responsive-item" to="/">Home </Link>
              <Link className="m-2 responsive-item" to="/about">About </Link>
              <Link className="m-2 responsive-item" to="/services">Services</Link>
              <Link className="m-2 responsive-item" to="/industries">Industries</Link>
              <Link className="m-2 responsive-item" to="/features">Features</Link>
              <Link className="m-2 responsive-item" to="/contact">Contact Us</Link>
            </div>
          </div>
        )}
      </div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="header-item-flex">
          <div>
            <Link className="navbar-brand" to="/">
              <img src="vidhyaGxp.png" height="250px" className="d-inline-block align-top" alt="" />
            </Link>
          </div>
          <div className="collapse navbar-collapse pt-3 " id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link" tabindex="-1" aria-disabled="true">About</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Services
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/ebmr">e-BMR</Link>
                  <Link className="dropdown-item" to="/elogbook">e-LogBook</Link>
                  <Link className="dropdown-item" to="/lms">LMS</Link>
                  <Link className="dropdown-item" to="/mes">MES</Link>
                  <Link className="dropdown-item" to="/edms">EDMS</Link>
                  <Link className="dropdown-item" to="/eqms">EQMS</Link>
                  <Link className="dropdown-item" to="/quality-risk-management">Quality Risk Management</Link>
                  <Link className="dropdown-item" to="/pharma-audit">Pharma Audit & Remediation</Link>
                  <Link className="dropdown-item" to="/root-cause-analysis">Automated Root Cause Analysis</Link>
                  <Link className="dropdown-item" to="/warehouse-management">Warehouse management system</Link>
                  <Link className="dropdown-item" to="/paperless-microbiology">Paper less microbiology</Link>
                  <Link className="dropdown-item" to="/usfda-warning-letter-management"> USFDA warning letter management</Link>
                  <Link className="dropdown-item" to="/merger-and-acquisition">Merger & acquisition</Link>
                  <Link className="dropdown-item" to="/ai-assited-culture-of-quality"> AI-Assisted Culture of Quality</Link>
                  <Link className="dropdown-item" to="/connected-and-integrated-gxp-systems"> Connected & Integrated GXP Systems</Link>
                  <Link className="dropdown-item" to="/ai-assited-pharma">AI-Assisted Pharma 4.0</Link>
                  <Link className="dropdown-item" to="/intelligent-pharma"> Intelligent Pharma Manufacturing Factory</Link>
                  <Link className="dropdown-item" to="/gxp-training">GxP Training</Link>
                  <Link className="dropdown-item" to="/rpa">Robotic Process Automation (RPA) </Link>


                  <div className="dropdown-divider"></div>

                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/industries" tabindex="-1" aria-disabled="true">Industries</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/features" tabindex="-1" aria-disabled="true">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" tabindex="-1" aria-disabled="true">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleButtonClick}>
          <span className="navbar-toggler-icon"></span>
        </button>

      </nav>
    </>
  );
}

export default Header;