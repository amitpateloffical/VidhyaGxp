import "swiper/css";
import "./Home.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Accordion, Card, Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DropdownButton, Dropdown } from "react-bootstrap"; // Import Dropdown components from React Bootstrap
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faBrain,
  faCheck,
  faGraduationCap,
  faPowerOff,
  faRobot,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import MySlider from "../components/MySlider";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaBuilding,
  FaCalendarAlt,
  FaCheck,
  FaCheckCircle,
  FaClipboardCheck,
  FaFlask,
  FaGlobe,
  FaHardHat,
  FaIndustry,
  FaProjectDiagram,
  FaStar,
  FaWrench,
} from "react-icons/fa";
import ScrollToTop from "../components/ScrollToTop";
// import Swiper from "../components/Swiper";
function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1400 });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="slider-container">
        <div className="container-fluid hero-header">
          <div className="container pt-4">
            <div className="row g-5 pt-5 row-xm">
              <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                <div className="btn btn-sm border rounded-pill text-light px-3 mb-3 animated slideInRight">
                  VidyaGxP
                </div>
                <h5 className="display-4 text-light mb-4 animated slideInRight">
                  Artificial Intelligence for Your Business
                </h5>
                <p className="text-light mb-4  animated slideInRight ">
                  Empowering Your Business with Intelligent Solutions: Harness
                  the Power of Artificial Intelligence to Optimize, Innovate,
                  and Excel in the Digital Era.
                </p>
                <div className="pt-4">
                  <Link
                    to="/features"
                    className="btn btn-light  py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight text-dark fw-bold"
                  >
                    Read More
                  </Link>
                  <Link
                    to="/contact"
                    className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight fw-bold"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 align-self-end text-center text-lg-end">
                <img className="img-head " src="/" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid section2 mt-5 py-5">
          <div className="row d-flex flex-row">
            <div className="col-md-4 mt-4 p-4">
              <Card className="p-1 p-md-5 mb-4 shadow-md" data-aos="fade-up">
                <h2 className="text-primary">Our Services</h2>
                <div className="services-list mt-4">
                  <div className="mb-2">
                    <DropdownButton
                      id="dropdown-basic-button1"
                      title={
                        <span>
                          <FaProjectDiagram style={{ marginRight: "8px" }} />
                          GreenField Project
                        </span>
                      }
                      style={{ width: "100%", textAlign: "left", color: "red" }}
                    >
                      <Dropdown.Item href="#/action-1">
                        Feasibility Studies
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Site Selection
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Facility Design and Layout
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-4">
                        Design Risk Assessment
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-5">
                        Detailed Engineering Design
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-6">
                        Regulatory Compliance
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-7">
                        Project Management
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-8">
                        Technology and Equipment Selection
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-9">
                        Commision and Qualification
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <div className="mb-2">
                    <DropdownButton
                      id="dropdown-basic-button2"
                      title={
                        <span>
                          <FaBuilding style={{ marginRight: "8px" }} />
                          Brownfield Enhancement
                        </span>
                      }
                      style={{ width: "100%", textAlign: "left", color: "red" }}
                    >
                      <Dropdown.Item href="#/action-1">
                        Design Risk Assessment
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Detailed Engineering Design
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Regulatory Compliance
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-4">
                        Project Management
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-5">
                        Technology and Equipment Selection
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-6">
                        Commissioning and Qualification
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <div className="mb-2">
                    <DropdownButton
                      id="dropdown-basic-button3"
                      title={
                        <span>
                          <FaGlobe style={{ marginRight: "8px" }} />
                          Global Regulatory Compliances
                        </span>
                      }
                      style={{ width: "100%", textAlign: "left", color: "red" }}
                    >
                      <Dropdown.Item href="#/action-1">
                        Submission to Regulatory Authorities
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Document Review and Elimination of Queries/Rejection
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Drug Master File (DMF) Compilation
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-4">
                        Response to Regulatory Queries
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-5">
                        Regulatory Compliance and Gap Analysis
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-6">
                        Post Approval Changes Submissions
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-7">
                        Guidance for ANDA and DMFs Preparation
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <div className="mb-2">
                    <DropdownButton
                      id="dropdown-basic-button4"
                      title={
                        <span>
                          <FaCheckCircle style={{ marginRight: "8px" }} />
                          Audits and Supplier Qualification
                        </span>
                      }
                      style={{ width: "100%", textAlign: "left", color: "red" }}
                    >
                      <Dropdown.Item href="#/action-1">
                        Pre and Post Inspection Audits
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Audit Compliance Reports
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Facility Upgradation for GMP Compliance
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-4">
                        Mock Audits
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-5">
                        Due Diligence Audits
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-6">
                        GAP Assessment Audit
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-7">
                        GMP Audits for API and Starting Materials
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-8">
                        Supplier and Excipient Audits
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-9">
                        GMP Audits for Third-Party Manufacturers
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-md-8 mt-4 p-4">
              <Card className="p-5 mb-4 shadow-md" data-aos="fade-left">
                <h2 className="text-primary">Who We Are</h2>
                <p>
                  At VidyaGxP, our focus on building long-term client
                  relationships has helped us become one of the largest and most
                  diverse providers of technical, professional and consultancy
                  services, including all aspects of engineering, operations,
                  project management, validation & quality assurance.
                </p>
                <Row className="text-center mt-4">
                  <Col>
                    <div className="stat-item" data-aos="zoom-in">
                      <FaClipboardCheck
                        size={40}
                        className="mb-2 text-secondary"
                        style={{ color: "blue" }}
                      />
                      <div className="stat-number text-primary">100+</div>
                      <div className="stat-label text-muted">Projects</div>
                    </div>
                  </Col>
                  <Col>
                    <div className="stat-item" data-aos="zoom-in">
                      <FaCalendarAlt
                        size={40}
                        className="mb-2 text-secondary"
                        style={{ color: "blue" }}
                      />
                      <div className="stat-number text-primary">10+ Years</div>
                      <div className="stat-label text-muted">of experience</div>
                    </div>
                  </Col>
                  <Col>
                    <div className="stat-item" data-aos="zoom-in">
                      <FaStar size={40} className="mb-2 text-secondary" />
                      <div className="stat-number text-primary">100%</div>
                      <div className="stat-label text-muted">
                        Customer Satisfaction
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </div>
          </div>
        </div>

        <div className="container-fluid pt-5   mb-1 mt-4">
          <div className="container">
            <div className="row g-5 align-items-center row-xm">
              <div
                className="col-lg-6 wow fadeIn"
                data-wow-delay="0.1s"
                data-aos="fade-right"
              >
                <div className="about-img">
                  <img className="img-fluid" src="/about-img.jpg" />
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="col-lg-6 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="btn btn-sm border-warning rounded-pill text-warning  mb-4">
                  About Us
                </div>
                <h1 className="mb-4">
                  We Make Your Business Smarter with Artificial Intelligence
                </h1>
                <p className="mb-2">
                  Transforming Possibilities into Reality: At VidyaGxP, we
                  specialize in making your business smarter through
                  cutting-edge Artificial Intelligence.{" "}
                </p>
                <p className="mb-4">
                  Our solutions seamlessly integrate with your operations,
                  unlocking new levels of efficiency and innovation. With a
                  commitment to excellence, we elevate your business to thrive
                  in the ever-evolving digital landscape.
                </p>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <h6 className="mb-3">
                      <i className="fa fa-check text-primary me-2"></i>
                      Award Winning
                    </h6>
                    <h6 className="mb-0">
                      <i className="fa fa-check text-primary me-2"></i>
                      Professional Staff
                    </h6>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="mb-3">
                      <i className="fa fa-check text-primary me-2"></i>
                      24/7 Support
                    </h6>
                    <h6 className="mb-0">
                      <i className="fa fa-check text-primary me-2"></i>
                      Fair Prices
                    </h6>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-5">
                  <Link
                    className="btn btn-warning text-light rounded-pill px-4 me-3"
                    to="about"
                  >
                    Read More
                  </Link>
                  <a
                    className="btn btn-outline-warning  btn-square me-3"
                    href="https://www.linkedin.com/company/vidyagxp/"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    className="btn btn-outline-warning  btn-square me-3"
                    href="https://www.linkedin.com/company/vidyagxp/"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    className="btn btn-outline-warning  btn-square me-3"
                    href="https://www.linkedin.com/company/vidyagxp/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    className="btn btn-outline-warning  btn-square"
                    href="https://www.linkedin.com/company/vidyagxp/"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid section2 mt-5 py-5 ">
          <div className="container py-5">
            <div className="row g-5 align-items-center row-xm">
              <div
                className="col-lg-5 wow fadeIn"
                data-wow-delay="0.1s"
                data-aos="fade-right"
              >
                <div className="btn btn-sm border rounded-pill text-light px-3 mb-4">
                  Our Services
                </div>
                <h1 className="mb-4 ">
                  Our Excellent AI Solutions for Your Business
                </h1>
                <p className="mb-4">
                  Tailored AI Services to Elevate Your Business Unlock the full
                  potential of Artificial Intelligence with our tailored
                  solutions at VidyaGxP. We offer dynamic and innovative
                  services, seamlessly integrating AI into your operations. From
                  intelligent automation to data-driven insights, our expertise
                  ensures your business stays at the forefront of technological
                  advancement.
                </p>
                <div className="pt-2">
                  <a className="btn btn-light rounded-pill px-4" href="">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-lg-7 row-xxm" data-aos="fade-left">
                <div className="row g-4 ">
                  <div className="col-md-6">
                    <div className="row g-4">
                      <div
                        className="col-12 wow fadeIn"
                        data-wow-delay="0.1s"
                        data-aos="flip-up"
                      >
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                          <div className="service-icon btn-square">
                            <FontAwesomeIcon icon={faRobot} />
                          </div>
                          <h5 className="mb-3">Robotic Automation</h5>
                          <p>
                            Revolutionize Efficiency with Robotic Automation at
                            VidyaGxP. Streamlined processes for enhanced
                            productivity and a future-focused approach to work.
                          </p>
                          <a className="btn px-3 mt-auto mx-auto" href="">
                            Read More
                          </a>
                        </div>
                      </div>
                      <div
                        className="col-12 wow fadeIn"
                        data-aos="flip-up"
                        data-wow-delay="0.5s"
                      >
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                          <div className="service-icon btn-square">
                            <FontAwesomeIcon icon={faPowerOff} />
                          </div>
                          <h5 className="mb-3">Machine learning</h5>
                          <p>
                            Empower success with our Machine Learning solutions.
                            From predictive analytics to intelligent insights,
                            we unleash innovation for your business growth.
                          </p>
                          <a className="btn px-3 mt-auto mx-auto" href="">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 pt-md-4">
                    <div className="row g-4">
                      <div
                        className="col-12 wow fadeIn"
                        data-aos="flip-up"
                        data-wow-delay="0.3s"
                      >
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                          <div className="service-icon btn-square">
                            <FontAwesomeIcon icon={faGraduationCap} />
                          </div>
                          <h5 className="mb-3">Education & Science</h5>
                          <p>
                            Empowering education and advancing scientific
                            discovery, our innovative services pave the way for
                            transformative learning experiences and
                            groundbreaking research. Elevate your journey in
                            education and science with us.{" "}
                          </p>
                          <a className="btn px-3 mt-auto mx-auto" href="">
                            Read More
                          </a>
                        </div>
                      </div>
                      <div
                        className="col-12 wow fadeIn"
                        data-aos="flip-up"
                        data-wow-delay="0.7s"
                      >
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                          <div className="service-icon btn-square">
                            <FontAwesomeIcon icon={faBrain} />
                          </div>
                          <h5 className="mb-3">Predictive Analysis</h5>
                          <p>
                            Strategic Insights through Predictive Analysis.
                            Harness the future with our solutions, providing
                            actionable intelligence for informed
                            decision-making.
                          </p>
                          <a className="btn px-3 mt-auto mx-auto" href="">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Service End --> */}

        {/* <!-- Case Start --> */}
        <div className="container-fluid bg-light ">
          <div className="container pb-5">
            <div
              className="mx-auto text-center wow fadeIn"
              data-wow-delay="0.1s"
              style={{ maxWidth: "500px" }}
            >
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3 mt-5">
                Services
              </div>
              <h1 className="mb-4" data-aos="fade-right">
                Our Top Services
              </h1>
            </div>
            <div className="row g-4 row-service">
              <div
                className="col-lg-4 wow fadeIn"
                data-wow-delay="0.3s"
                data-aos="zoom-in"
                onClick={() => navigate("/elogbook")}
              >
                <div className="case-item position-relative overflow-hidden rounded mb-2">
                  <img className="img-fluid" src="/eLogBook.jpg" alt="" />
                  <a className="case-overlay text-decoration-none" href="">
                    <small>eLogBook</small>
                    <h5 className="lh-base text-white mb-3">
                      "Digital logbook service for efficient record-keeping."
                    </h5>
                    <span className="btn btn-square btn-primary">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 wow fadeIn"
                data-wow-delay="0.5s"
                data-aos="zoom-in"
                onClick={() => navigate("/edms")}
              >
                <div className="case-item position-relative overflow-hidden rounded mb-2">
                  <img className="img-fluid" src="/edms.jpg" alt="" />
                  <a
                    className="case-overlay text-decoration-none"
                    href=""
                    onClick={(e) => e.preventDefault()}
                  >
                    <small>EDMS</small>
                    <h5 className="lh-base text-white mb-3">
                      "Electronic Document Management System for organizing
                      digital files."
                    </h5>
                    <span className="btn btn-square btn-primary">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 wow fadeIn"
                data-wow-delay="0.7s"
                data-aos="zoom-in"
                onClick={() => navigate("/eqms")}
              >
                <div className="case-item position-relative overflow-hidden rounded mb-2">
                  <img className="img-fluid" src="/eqms.jpg" alt="" />
                  <a className="case-overlay text-decoration-none" href="">
                    <small>EQMS</small>
                    <h5 className="lh-base text-white mb-3">
                      "Enterprise Quality Management System for process
                      optimization and compliance."
                    </h5>
                    <span className="btn btn-square btn-primary">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
