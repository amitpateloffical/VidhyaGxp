import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
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
import { useEffect } from "react";

function Footer() {
  const navigate = useNavigate();
  const handleClick = (to) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(to);
  };
  return (
    <>
      {/* <!-- Footer Start --> */}
      <div className="container-fluid bg-dark text-white-50 footer py-3">
        <div className="footer-section pt-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <a href="index.html" className="d-inline-block mb-3">
                <h1 className="text-white">
                  VidyaGxP<span className="text-primary"></span>
                </h1>
              </a>
              <p className="mb-0">
                Empowering Your Business with Intelligent Solutions: Harness the
                Power of Artificial Intelligence to Optimize, Innovate, and
                Excel in the Digital Era.
              </p>
              <div className="d-flex pt-4">
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.linkedin.com/company/vidyagxp/"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.linkedin.com/company/vidyagxp/"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.linkedin.com/company/vidyagxp/"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.linkedin.com/company/vidyagxp/"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
            {/* <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <h5 className="text-white mb-1">Get In Touch</h5>
              <p>
                <FontAwesomeIcon icon={faSignsPost} className="me-3" />
                Europe Office: Ellisa Tower, EH10 4BF 44/46 MORNINGSIDE ROAD, EDINBURGH
              </p>
              <p>
                <FontAwesomeIcon icon={faSignsPost} className="me-3" />
                North America Office: North Avenue, Lincoln Square, 60625, Chicago
              </p>
              <p>
                <FontAwesomeIcon icon={faSignsPost} className="me-3" />
                APAC Office: 87 Jalan Molek 3/1 Taman Molek, Johor Bahru, Johor, 81100, Malaysia
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-3" />
                +91-8821836528
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelopeOpenText} className="me-3" />
                info@VidhyaGxP.com
              </p>
              
            </div> */}
            <div className="col-md-7 col-lg-2 wow fadeIn" data-wow-delay="0.5s">
              <h5 className="text-white mb-4">Quick Links</h5>
              <div style={{ width: "fit-content" }}>
                <Link
                  onClick={() => handleClick("/about")}
                  className="btn btn-link"
                  to="/about"
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                  About Us
                </Link>
                <Link
                  onClick={() => handleClick("/contact")}
                  className="btn btn-link"
                  to="/contact"
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                  Contact Us
                </Link>
                <Link
                  onClick={() => handleClick("/industries")}
                  className="btn btn-link"
                  to="/industries"
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                  Industries
                </Link>
                <Link
                  onClick={() => handleClick("/features")}
                  className="btn btn-link"
                  to="/features"
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                  Features
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.7s">
              <h5 className="text-white mb-4 text-sm-start text-lg-center">
                Our Services
              </h5>

              <div
                // style={{
                //   display: "flex",
                //   flexDirection: "row",
                //   justifyContent: "center",
                //   gap: "70px",
                // }}
               className="d-lg-flex justify-content-lg-center gap-lg-5"
              >
                <div className="col-lg-3 col-sm-6">
                  <Link
                    onClick={() => handleClick("/ebmr")}
                    className="btn btn-link"
                    style={{ width: "fit-content" }}
                    to="/ebmr"
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    e-BMR
                  </Link>
                  <Link
                    onClick={() => handleClick("/elogbook")}
                    className="btn btn-link"
                    style={{ width: "fit-content" }}
                    to="/elogbook"
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    e-LogBook
                  </Link>
                  <Link
                    onClick={() => handleClick("/lms")}
                    className="btn btn-link"
                    style={{ width: "fit-content" }}
                    to="/lms"
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    LMS
                  </Link>
                  <Link
                    onClick={() => handleClick("/mes")}
                    className="btn btn-link"
                    style={{ width: "fit-content" }}
                    to="/mes"
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    MES
                  </Link>
                  <Link
                    onClick={() => handleClick("/edms")}
                    className="btn btn-link"
                    style={{ width: "fit-content" }}
                    to="/edms"
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    EDMS
                  </Link>
                  <Link
                    onClick={() => handleClick("/eqms")}
                    className="btn btn-link"
                    style={{ width: "fit-content" }}
                    to="/eqms"
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    EQMS
                  </Link>
                  <Link
                    onClick={() => handleClick("/quality-risk-management")}
                    className="btn btn-link"
                    style={{ width: "fit-content" }}
                    to="/quality-risk-management"
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    QRM
                  </Link>

                  <Link
                    onClick={() => handleClick("/root-cause-analysis")}
                    className="btn btn-link"
                    style={{ width: "fit-content" }}
                    to="/root-cause-analysis"
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    ARCA
                  </Link>
                  <Link
                    onClick={() => handleClick("/warehouse-management")}
                    className="btn btn-link"
                    style={{ width: "fit-content" }}
                    to="/warehouse-management"
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    WMS
                  </Link>
                  <Link
                    onClick={() => handleClick("/rpa")}
                    className="btn btn-link"
                    style={{ width: "fit-content" }}
                    to="/rpa"
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    RPA
                  </Link>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <Link
                    onClick={() => handleClick("/paperless-microbiology")}
                    className="btn btn-link"
                    style={{ width: "min-content" }}
                    to="/paperless-microbiology"
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    Paper Less Microbiology
                  </Link>
                  <Link
                    onClick={() =>
                      handleClick("/connected-and-integrated-gxp-systems")
                    }
                    className="btn btn-link"
                    style={{ width: "fit-content" }}
                    to="/connected-and-integrated-gxp-systems"
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    Connected & Integrated GXP Systems
                  </Link>
                  <Link
                    onClick={() => handleClick("/ai-assited-pharma")}
                    className="btn btn-link"
                    style={{ width: "fit-content" }}
                    to="/ai-assited-pharma"
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    AI-Assisted Pharma 4.0
                  </Link>
                  <Link
                    onClick={() => handleClick("/intelligent-pharma")}
                    className="btn btn-link"
                    style={{ width: "fit-content" }}
                    to="/intelligent-pharma"
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    Intelligent Pharma Manufacturing Factory{" "}
                  </Link>
                  <Link
                    onClick={() => handleClick("/gxp-training")}
                    className="btn btn-link"
                    style={{ width: "fit-content" }}
                    to="/gxp-training"
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                    GxP Training
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <h5 className="text-white mb-4">Get In Touch</h5>
              <p>
                <FontAwesomeIcon icon={faSignsPost} className="me-3" />
                Europe Office: Ellisa Tower, EH10 4BF 44/46 <br /> MORNINGSIDE
                ROAD, EDINBURGH
              </p>
              <p>
                <FontAwesomeIcon icon={faSignsPost} className="me-3" />
                North America Office: North Avenue, Lincoln Square, 60625,
                Chicago
              </p>
              <p>
                <FontAwesomeIcon icon={faSignsPost} className="me-3" />
                Building Plot No 8, Swastik Urbane, 2st Floor, PU 4, In front of
                Chai Kaapi, Near Medanta Hospital, Scheme 54 PU4, Indore, Madhya
                Pradesh 452010
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-3" />
                +91-78796768742
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelopeOpenText} className="me-3" />
                info@vidyagxp.com
              </p>
            </div>
          </div>
        </div>
        <div className="container wow fadeIn" data-wow-delay="0.1s">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
                &copy; VidyaGxP, All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="/">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FAQs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </>
  );
}

export default Footer;
