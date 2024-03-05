import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight, faEnvelopeOpenText, faPhone, faSignsPost } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      {/* <!-- Footer Start --> */}
      <div className="container-fluid bg-dark text-white-50 footer py-3">
        <div className="footer-section pt-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3 wow fadeIn " data-wow-delay="0.1s">
              <a href="index.html" className="d-inline-block mb-3">
                <h1 className="text-white">
                  LifeLink<span className="text-primary"></span>Digital
                </h1>
              </a>
              <p className="mb-0 style={{ fontSize: '14px' }}>">
                Empowering Your Business with Intelligent Solutions: Harness the Power of Artificial Intelligence to
                Optimize, Innovate, and Excel in the Digital Era.
              </p>
              <div className="d-flex pt-4">
                <a className="btn btn-outline-light btn-social" href="">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
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
                info@lifelinkdigital.com
              </p>
              
            </div> */}
            <div className="col-md-7 col-lg-2 wow fadeIn" data-wow-delay="0.5s">
              <h5 className="text-white mb-4">Popular Link</h5>
              <Link className="btn btn-link" to="/about">
                <FontAwesomeIcon icon={faAngleRight} />
                About Us
              </Link>
              <Link className="btn btn-link" to="/contact">
                <FontAwesomeIcon icon={faAngleRight} />
                Contact Us
              </Link>
              <Link className="btn btn-link" to="/industries">
                <FontAwesomeIcon icon={faAngleRight} />
                Industries
              </Link>
              <Link className="btn btn-link" to="/features">
                <FontAwesomeIcon icon={faAngleRight} />
                Features
              </Link>
            </div>
            <div className="col-md-6 col-lg-2 wow fadeIn" data-wow-delay="0.7s">
              <h5 className="text-white mb-4">Our Services</h5>
              <Link className="btn btn-link" to="/elogbook">
                <FontAwesomeIcon icon={faAngleRight} />
                elogBook
              </Link>
              <Link className="btn btn-link" to="/edms">
                <FontAwesomeIcon icon={faAngleRight} />
                EDMS
              </Link>
              <Link className="btn btn-link" to="/eqms">
                <FontAwesomeIcon icon={faAngleRight} />
                EQMS
              </Link>
              <Link className="btn btn-link" to="/quality-risk-management">
                <FontAwesomeIcon icon={faAngleRight} />
                Quality Risk Management (QRM)
              </Link>
              <Link className="btn btn-link" to="/paperless-microbiology">
                <FontAwesomeIcon icon={faAngleRight} />
                Paper Less Microbiology
              </Link>
            </div>

            <div className="col-md-4 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <h5 className="text-white mb-1">Get In Touch</h5>
              <p>
                <FontAwesomeIcon icon={faSignsPost} className="me-3" />
                Europe Office: Ellisa Tower, EH10 4BF 44/46 <br />          MORNINGSIDE ROAD, EDINBURGH
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
                info@lifelinkdigital.com
              </p>
              
            </div>

          </div>
        </div>
        <div className="container wow fadeIn" data-wow-delay="0.1s">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
                &copy; Life Link Digital, All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="">Home</a>
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
