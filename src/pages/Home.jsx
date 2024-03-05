import "swiper/css";
import "./Home.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Accordion } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF, faInstagram, faLinkedinIn, faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight, faBrain, faCheck, faGraduationCap, faPowerOff, faRobot, faUsers,
} from "@fortawesome/free-solid-svg-icons";
import MySlider from "../components/MySlider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
        <MySlider />
      </div>
      <div className="container-fluid pt-5 section2 hero-header mb-5 mt-4">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s" data-aos="fade-right">
              <div className="about-img">
                <img className="img-fluid" src="/about-img.jpg" />
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">
                About Us
              </div>
              <h1 className="mb-4">
                We Make Your Business Smarter with Artificial Intelligence
              </h1>
              <p className="mb-2">
                Transforming Possibilities into Reality: At Life Link Digital,
                we specialize in making your business smarter through
                cutting-edge Artificial Intelligence.{" "}
              </p>
              <p className="mb-4">
                Our solutions seamlessly integrate with your operations,
                unlocking new levels of efficiency and innovation. With a
                commitment to excellence, we elevate your business to thrive in
                the ever-evolving digital landscape.
              </p>
              <div className="row g-3">
                <div className="col-sm-6">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2"></i>Award
                    Winning
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2"></i>
                    Professional Staff
                  </h6>
                </div>
                <div className="col-sm-6">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2"></i>24/7
                    Support
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2"></i>Fair Prices
                  </h6>
                </div>
              </div>
              <div className="d-flex align-items-center mt-4">
                <a className="btn btn-dark rounded-pill px-4 me-3" href="">
                  Read More
                </a>
                <a className="btn btn-outline-dark btn-square me-3" href="">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a className="btn btn-outline-dark btn-square me-3" href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className="btn btn-outline-dark btn-square me-3" href="">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className="btn btn-outline-dark btn-square" href="">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light mt-5 py-5 ">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-5 wow fadeIn"
              data-wow-delay="0.1s"
              data-aos="fade-right"
            >
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Our Services
              </div>
              <h1 className="mb-4">
                Our Excellent AI Solutions for Your Business
              </h1>
              <p className="mb-4">
                Tailored AI Services to Elevate Your Business Unlock the full
                potential of Artificial Intelligence with our tailored solutions
                at [Your Business Name]. We offer dynamic and innovative
                services, seamlessly integrating AI into your operations. From
                intelligent automation to data-driven insights, our expertise
                ensures your business stays at the forefront of technological
                advancement.
              </p>
              <a className="btn btn-primary rounded-pill px-4" href="">
                Read More
              </a>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <div className="row g-4">
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
                          Life Link Digital. Streamlined processes for enhanced
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
                          From predictive analytics to intelligent insights, we
                          unleash innovation for your business growth.
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
                          transformative learning experiences and groundbreaking
                          research. Elevate your journey in education and
                          science with us.{" "}
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
                          actionable intelligence for informed decision-making.
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

      {/* <!-- Feature Start --> */}
      <div className="container-fluid bg-themeColor feature pt-5">
        <div className="container pt-5">
          <div className="row g-5">
            <div
              data-aos="fade-right"
              className="col-lg-6 align-self-center mb-md-5 pb-md-5 wow fadeIn"
              data-wow-delay="0.3s"
            >
              <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">
                Why Choose Us
              </div>
              <h1 className="text-white mb-4">
                We&lsquo;re Best in AI Industry with 10 Years of Experience
              </h1>
              <p className="text-light mb-4">
                AI Excellence with a Decade of Expertise. Our commitment,
                innovative solutions, and proven track record set us apart.
              </p>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <span>
                  Cutting-edge AI Solutions for Business Transformation
                </span>
              </div>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <span>
                  Decade-long Expertise in Crafting Innovative Technologies
                </span>
              </div>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <span>Client-Centric Approach with Proven Success Stories</span>
              </div>
              <div className="row g-4 pt-3">
                <div className="col-sm-6">
                  <div
                    className="d-flex align-items-center rounded p-3"
                    style={{ background: "rgba(256, 256, 256, 0.1)" }}
                  >
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="fa-3x text-white"
                    />
                    <div className="ms-3">
                      <h2 className="text-white mb-0" data-toggle="counter-up">
                        93
                      </h2>
                      <p className="text-white mb-0">Happy Clients</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div
                    className="d-flex align-items-center rounded p-3"
                    style={{ background: "rgba(256, 256, 256, 0.1)" }}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="fa-3x text-white"
                    />
                    <div className="ms-3">
                      <h2 className="text-white mb-0" data-toggle="counter-up">
                        107
                      </h2>
                      <p className="text-white mb-0">Project Complete</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-lg-6 align-self-end text-center text-md-end wow fadeIn"
              data-wow-delay="0.5s"
            >
              <img className="img-fluid" src="/feature.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Feature End --> */}
      {/* <!-- Case Start --> */}
      <div className="container-fluid bg-light py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
              Services
            </div>
            <h1 className="mb-4" data-aos="fade-right">
              Our Top Services
            </h1>
          </div>
          <div className="row g-4">
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
    </>
  );
}

export default Home;
{
  /* <!-- Case End --> */
}
{
  /* <!-- FAQs Start --> */
}
{
  /* <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Popular FAQs</div>
            <h1 className="mb-4">Frequently Asked Questions</h1>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>How to build a website?</Accordion.Header>
                  <Accordion.Body>
                    Discover the roadmap to website creation – from defining purpose to launch and ongoing optimization
                    strategies.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>How long will it take to get a new website?</Accordion.Header>
                  <Accordion.Body>
                    The timeline for your new website depends on complexity. Generally, expect 4-6 weeks for completion.{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>How to build a website?</Accordion.Header>
                  <Accordion.Body>
                    Embark on your website journey: Define purpose, choose domain, design layout, add content, optimize,
                    and launch.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>How long will it take to get a new website?</Accordion.Header>
                  <Accordion.Body>
                    The timeline for your new website depends on complexity. Generally, expect 4-6 weeks for completion.{" "}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="col-lg-6">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Will you maintain my site for me?</Accordion.Header>
                  <Accordion.Body>
                    Yes, we offer comprehensive site maintenance services, ensuring your website stays optimized,
                    secure, and up-to-date.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>I’m on a strict budget. Do you have any low cost options?</Accordion.Header>
                  <Accordion.Body>
                    Yes, we offer budget-friendly solutions tailored to your needs, ensuring affordability without
                    compromising quality or functionality.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Will you maintain my site for me?</Accordion.Header>
                  <Accordion.Body>
                    Yes, we offer comprehensive site maintenance services, ensuring your website stays optimized,
                    secure, and up-to-date.{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>I’m on a strict budget. Do you have any low cost options?</Accordion.Header>
                  <Accordion.Body>
                    Yes, we offer budget-friendly solutions tailored to your needs, ensuring affordability without
                    compromising quality or functionality.{" "}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div> */
}
{
  /* <!-- FAQs Start --> */
}
{
  /* <!-- Team Start --> */
}
{
  /* <div className="container-fluid bg-light py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">Our Team</div>
              <h1 className="mb-4">Meet Our Experienced Team Members</h1>
              <p className="mb-4">
                Explore the expertise of our seasoned team members at Life Link Digital. Each individual brings diverse
                skills, commitment, and innovation to drive our collective success.
              </p>
              <a className="btn btn-primary rounded-pill px-4" href="">
                Read More
              </a>
            </div>
            <div className="col-lg-7">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="row g-4">
                    <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                      <div className="team-item bg-white text-center rounded p-4 pt-0">
                        <img className="img-fluid rounded-circle p-4" src="/team-1.jpg" alt="" />
                        <h5 className="mb-0">Boris Johnson</h5>
                        <small>Founder & CEO</small>
                        <div className="d-flex justify-content-center mt-3">
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faFacebookF} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faTwitter} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faInstagram} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                      <div className="team-item bg-white text-center rounded p-4 pt-0">
                        <img className="img-fluid rounded-circle p-4" src="/team-2.jpg" alt="" />
                        <h5 className="mb-0">Adam Crew</h5>
                        <small>Executive Manager</small>
                        <div className="d-flex justify-content-center mt-3">
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faFacebookF} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faTwitter} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faInstagram} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pt-md-4">
                  <div className="row g-4">
                    <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                      <div className="team-item bg-white text-center rounded p-4 pt-0">
                        <img className="img-fluid rounded-circle p-4" src="/team-3.jpg" alt="" />
                        <h5 className="mb-0">Kate Winslet</h5>
                        <small>Co Founder</small>
                        <div className="d-flex justify-content-center mt-3">
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faFacebookF} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faTwitter} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faInstagram} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                      <div className="team-item bg-white text-center rounded p-4 pt-0">
                        <img className="img-fluid rounded-circle p-4" src="/team-4.jpg" alt="" />
                        <h5 className="mb-0">Cody Gardner</h5>
                        <small>Project Manager</small>
                        <div className="d-flex justify-content-center mt-3">
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faFacebookF} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faTwitter} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faInstagram} />
                          </a>
                          <a className="btn btn-square btn-primary m-1" href="">
                            <FontAwesomeIcon icon={faLinkedinIn} />
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
      </div> */
}
{
  /* <!-- Team End --> */
}
{
  /* <!-- Testimonial Start --> */
}
{
  /* <div className="container-xxl py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="btn btn-sm border rounded-pill text-themeColor px-3 mb-3">Testimonial</div>
              <h1 className="mb-4">What Say Our Clients!</h1>
              <p className="mb-4">
                Hear What Our Satisfied Partners Have to Say About Their Transformative Experiences with Us.
              </p>
              <a className="btn btn-primary rounded-pill px-4" href="">
                Read More
              </a>
            </div>
            <div className="col-lg-7 wow fadeIn">
              <Swiper
                direction={"horizontal"}
                navigation={{
                  clickable: true,
                  // nextEl: '.swiper-button-next',
                  // prevEl: '.swiper-button-prev',
                }}
                modules={[Navigation]}
                // style={{  }}
              >
                <SwiperSlide>
                  <div className="testimonial-item px-5">
                    <i className="fa fa-quote-left fa-2x text-themeColor mb-3"></i>
                    <p className="fs-4">
                      Elevating our project with expertise and dedication. Their innovative solutions exceeded our
                      expectations.
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        className="img-fluid flex-shrink-0 rounded-circle"
                        src="/testimonial-1.jpg"
                        style={{ width: "60px", height: "60px" }}
                      />
                      <div className="ps-3">
                        <h5 className="mb-1">Client Name</h5>
                        <span>Profession</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial-item px-5">
                    <i className="fa fa-quote-left fa-2x text-themeColor mb-3"></i>
                    <p className="fs-4">
                      Impressed with their professionalism and commitment. Their solutions brought efficiency and
                      excellence to our project.
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        className="img-fluid flex-shrink-0 rounded-circle"
                        src="/testimonial-2.jpg"
                        style={{ width: "60px", height: "60px" }}
                      />
                      <div className="ps-3">
                        <h5 className="mb-1">Client Name</h5>
                        <span>Profession</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial-item px-5 ">
                    <i className="fa fa-quote-left fa-2x text-themeColor mb-3"></i>
                    <p className="fs-4">
                      Their dedication and expertise exceeded our expectations. A reliable partner for achieving
                      outstanding results in every project.
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        className="img-fluid flex-shrink-0 rounded-circle"
                        src="/testimonial-3.jpg"
                        style={{ width: "60px", height: "60px" }}
                      />
                      <div className="ps-3">
                        <h5 className="mb-1">Client Name</h5>
                        <span>Profession</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div> */
}
{
  /* <!-- Testimonial End --> */
}

// /commented code may be used later
{
  /* <!-- Hero Start --> */
}
{
  /* <div className="container-fluid pt-5  hero-header mb-5">
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <div className="btn btn-sm border rounded-pill text-dark px-3 mb-3 animated slideInRight">
                Life Link Digital
              </div>
              <h1 className="display-4 text-dark mb-4 animated slideInRight">
                Artificial Intelligence for Your Business
              </h1>
              <p className="text-dark mb-4 animated slideInRight">
                Empowering Your Business with Intelligent Solutions: Harness the Power of Artificial Intelligence to
                Optimize, Innovate, and Excel in the Digital Era.
              </p>
              <a href="" className="btn btn-dark py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight">
                Read More
              </a>
              <a href="" className="btn btn-outline-dark py-sm-3 px-sm-5 rounded-pill animated slideInRight">
                Contact Us
              </a>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
              <img className="img-head " src="/3dd.png" alt="" />
            </div>
          </div>
        </div>
      </div> */
}
{
  /* <!-- Hero End --> */
}
{
  /* <!-- About Start --> */
}
{
  /* <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img">
                <img className="img-fluid" src="/about-img.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">About Us</div>
              <h1 className="mb-4">We Make Your Business Smarter with Artificial Intelligence</h1>
              <p className="mb-2">
                Transforming Possibilities into Reality: At Life Link Digital, we specialize in making your business
                smarter through cutting-edge Artificial Intelligence.{" "}
              </p>
              <p className="mb-4">
                Our solutions seamlessly integrate with your operations, unlocking new levels of efficiency and
                innovation. With a commitment to excellence, we elevate your business to thrive in the ever-evolving
                digital landscape.
              </p>
              <div className="row g-3">
                <div className="col-sm-6">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2"></i>Award Winning
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2"></i>Professional Staff
                  </h6>
                </div>
                <div className="col-sm-6">
                  <h6 className="mb-3">
                    <i className="fa fa-check text-primary me-2"></i>24/7 Support
                  </h6>
                  <h6 className="mb-0">
                    <i className="fa fa-check text-primary me-2"></i>Fair Prices
                  </h6>
                </div>
              </div>
              <div className="d-flex align-items-center mt-4">
                <a className="btn btn-dark rounded-pill px-4 me-3" href="">
                  Read More
                </a>
                <a className="btn btn-outline-dark btn-square me-3" href="">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a className="btn btn-outline-dark btn-square me-3" href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className="btn btn-outline-dark btn-square me-3" href="">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className="btn btn-outline-dark btn-square" href="">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */
}
{
  /* <!-- About End --> */
}
{
  /* <!-- Service Start --> */
}
