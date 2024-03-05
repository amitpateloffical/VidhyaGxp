import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  // const sidebarRef = useRef();
  // const [service, setService] = useState(false);
  // const [sidebar, setSideBar] = useState(false);

  // const handleOutSideClick = (e) => {
  //     if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
  //         setSideBar(false);
  //     }
  // }

  // const handleSidebarScroll = () => {
  //     setSideBar(false);
  // }

  // useEffect(() => {
  //     document.addEventListener('mousedown', handleOutSideClick);
  //     window.addEventListener('scroll', handleSidebarScroll);
  //     return () => {
  //         document.addEventListener('mousedown', handleOutSideClick);
  //         window.addEventListener('scroll', handleSidebarScroll);
  //     }
  // }, []);

  return (
    <>
      {/* <!-- Navbar Start --> */}
      <div className="container-fluid">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark p-0 py-5">
            <Link to="/" className="navbar-brand">
              <img style={{ height: "50px", width: "150px" }} src="new-logo.png" alt="Life Link Digital" />
            </Link>
            <button
              type="button"
              className="navbar-toggler ms-auto me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            ></button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                <NavLink to="/" className="nav-item nav-link">
                  Home
                </NavLink>
                <NavLink to="/about" className="nav-item nav-link">
                  About
                </NavLink>
                <NavLink
                  to="/services"
                  className="nav-item nav-link"
                  onClick={(e) => {
                    e.preventDefault(); // Prevents the default navigation behavior
                    e.stopPropagation(); // Stops event propagation to prevent interference with NavLink
                    // navigate("/services"); // Manually navigate to the desired route
                  }}
                >
                  <div className="dropdown">
                    <div>
                      Service &nbsp;
                      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill="currentColor"
                          d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16"
                        />
                      </svg>
                    </div>
                    <div className="dropdown-content">
                      <ul>
                        <li onClick={() => navigate("/ebmr")}>e-BMR</li>
                        <li onClick={() => navigate("/elogbook")}>e-LogBook</li>
                        <li onClick={() => navigate("/lms")}>LMS</li>
                        <li onClick={() => navigate("/mes")}>MES</li>
                        <li onClick={() => navigate("/edms")}>EDMS</li>
                        <li onClick={() => navigate("/eqms")}>EQMS</li>
                        <li onClick={() => navigate("/quality-risk-management")}>Quality Risk Management</li>
                        <li onClick={() => navigate("/pharma-audit")}>Pharma Audit & Remediation</li>
                        <li onClick={() => navigate("/root-cause-analysis")}>Automated Root Cause Analysis</li>
                        <li onClick={() => navigate("/warehouse-management")}>Warehouse management system</li>
                        <li onClick={() => navigate("/paperless-microbiology")}>Paper less microbiology</li>
                        <li onClick={() => navigate("/usfda-warning-letter-management")}>
                          USFDA warning letter management
                        </li>
                        <li onClick={() => navigate("/merger-and-acquisition")}>Merger & acquisition</li>
                        <li onClick={() => navigate("/ai-assited-culture-of-quality")}>
                          AI-Assisted Culture of Quality
                        </li>
                        <li onClick={() => navigate("/connected-and-integrated-gxp-systems")}>
                          Connected & Integrated GXP Systems
                        </li>
                        <li onClick={() => navigate("/ai-assited-pharma")}>AI-Assisted Pharma 4.0</li>
                        <li onClick={() => navigate("/intelligent-pharma")}>
                          Intelligent Pharma Manufacturing Factory
                        </li>
                        <li onClick={() => navigate("/gxp-training")}>GxP Training </li>
                        <li onClick={() => navigate("/rpa")}>Robotic Process Automation (RPA) </li>
                      </ul>
                      {/* <a href="/gxpsoftware">Software Design/Development</a>
                      <a href="/WebsiteDevelopment">Website Design</a>
                      <a href="/a">Pharma Digitization</a> */}
                    </div>
                  </div>
                </NavLink>

                {/* <div className="megadrop">
                                        <div className="megadrop-item">
                                            <a className="megadrop-item-link" href="/gxpsoftware">
                                                <div className="megadrop-item-about">
                                                    <strong>Software Design/Development</strong>
                                                </div>
                                            </a>
                                            <a className="megadrop-item-link" href="/WebsiteDevelopment">
                                                <div className="megadrop-item-about">
                                                    <strong>Website Design</strong>
                                                </div>
                                            </a>
                                            <a className="megadrop-item-link" href="/WebsiteDevelopment">
                                                <div className="megadrop-item-about">
                                                    <strong>SME Guidances</strong>
                                                </div>
                                            </a>
                                            <a className="megadrop-item-link" href="/UIUXDesign">
                                                <div className="megadrop-item-about">
                                                    <strong>Pharma Digitization</strong>
                                                </div>
                                            </a>
                                            <a className="megadrop-item-link" href="/EnterpriseSoftware">
                                                <div className="megadrop-item-about">
                                                    <strong>Healthcare Digitization</strong>
                                                </div>
                                            </a>
                                            <a className="megadrop-item-link" href="/CustomSoftware">
                                                <div className="megadrop-item-about">
                                                    <strong>Hospital Management</strong>
                                                </div>
                                            </a>
                                            <a className="megadrop-item-link" href="/BrandReputation">
                                                <div className="megadrop-item-about">
                                                    <strong>School/College Management</strong>
                                                </div>
                                            </a>
                                            <a className="megadrop-item-link" href="/SupportMaintenance">
                                                <div className="megadrop-item-about">
                                                    <strong>Computer Software Validation Assurance</strong>
                                                </div>
                                            </a>
                                            <a className="megadrop-item-link" href="/SupportMaintenance">
                                                <div className="megadrop-item-about">
                                                    <strong>Quality Risk Management</strong>
                                                </div>
                                            </a>
                                            <a className="megadrop-item-link" href="/SupportMaintenance">
                                                <div className="megadrop-item-about">
                                                    <strong>SDLC Management</strong>
                                                </div>
                                            </a>
                                            <a className="megadrop-item-link" href="/SupportMaintenance">
                                                <div className="megadrop-item-about">
                                                    <strong>GXP Audit Remidiation</strong>
                                                </div>
                                            </a>

                                        </div>
                                    </div> */}
                <NavLink to="/industries" className="nav-item nav-link">
                  Industries
                </NavLink>
                <NavLink to="/features" className="nav-item nav-link">
                  Features
                </NavLink>
                <NavLink to="/contact" className="nav-item nav-link">
                  Contact Us
                </NavLink>
                {/* {sidebar ? '' : (
                                    <div onClick={() => setSideBar(!sidebar)} className="toggleSidebar btn btn-primary cursor-pointer">
                                        <svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#fff" fillRule="evenodd" d="M2 1L1 2v12l1 1h12l1-1V2l-1-1zm0 13V2h7v12z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )} */}
              </div>
              <button
                type="button"
                className="btn text-white p-0 d-none d-lg-block"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </nav>
        </div>
        {/* <div className={`sidebar bg-success px-4 py-3 d-none d-lg-block`} style={sidebar ? { 'transform': 'translate(0, 0)' } : {}} ref={sidebarRef}> */}
        {/* <div className="sidebar_top ms-auto ">
                        <div onClick={() => setSideBar(false)} className="cross_icon cursor-pointer btn btn-light cursor-pointer ">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#fff" d="M10.5 17a1 1 0 0 1-.71-.29a1 1 0 0 1 0-1.42L13.1 12L9.92 8.69a1 1 0 0 1 0-1.41a1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32" />
                            </svg>
                        </div>
                    </div> */}
        {/* <div className="sidebar_bottom"> */}
        {/* <div className="nav_links">
                            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                        </div>
                        <div className="nav_links">
                            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                        </div> */}
        {/* <div onClick={() => setService(!service)} className="nav_links"> */}
        {/* <NavLink to="#" className="nav-item nav-link">Services</NavLink> */}
        {/* {service ? (
                                <div className="arrowIconDown">
                                    <svg width="24" height="24" viewBox="0 0 16 7" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#fff" d="M8 6.5a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l4.15 4.15l4.14-4.14c.2-.2.51-.2.71 0c.2.2.2.51 0 .71l-4.5 4.5c-.1.1-.23.15-.35.15Z" />
                                    </svg>
                                </div>
                            ) : (
                                <div className="arrowIconRight">
                                    <svg width="24" height="24" viewBox="0 0 7 16" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#fff" d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15" />
                                    </svg>
                                </div>
                            )} */}

        {/* </div> */}
        {/* {service ? (
                            <div className='service_container' >
                                <div className="service_links">
                                    <NavLink to="/services" className="nav-item nav-link">Software Developement</NavLink>
                                </div>
                                <div className="service_links">
                                    <NavLink to="/services" className="nav-item nav-link">Website Developement</NavLink>
                                </div>
                                <div className="service_links">
                                    <NavLink to="/services" className="nav-item nav-link">SME Guidence</NavLink>
                                </div>
                                <div className="service_links">
                                    <NavLink to="/services" className="nav-item nav-link">Pharma Digitization</NavLink>
                                </div>
                                <div className="service_links">
                                    <NavLink to="/services" className="nav-item nav-link">Pharma Digitization</NavLink>
                                </div>
                                <div className="service_links">
                                    <NavLink to="/services" className="nav-item nav-link">HealthCare Digitization</NavLink>
                                </div>
                                <div className="service_links">
                                    <NavLink to="/services" className="nav-item nav-link">Hospital Management</NavLink>
                                </div>
                                <div className="service_links">
                                    <NavLink to="/services" className="nav-item nav-link">School/College Management</NavLink>
                                </div>
                                <div className="service_links">
                                    <NavLink to="/services" className="nav-item nav-link">Computer Validation...</NavLink>
                                </div>
                                <div className="service_links">
                                    <NavLink to="/services" className="nav-item nav-link">Quality Risk Management</NavLink>
                                </div>
                                <div className="service_links">
                                    <NavLink to="/services" className="nav-item nav-link">SDLC Management</NavLink>
                                </div>
                                <div className="service_links">
                                    <NavLink to="/services" className="nav-item nav-link">GXP Audit ...</NavLink>
                                </div>
                            </div>
                        ) : ''} */}
        {/* <div className="nav_links">
                            <NavLink to="/features" className="nav-item nav-link">Features</NavLink>
                        </div>
                        <div className="nav_links">
                            <NavLink to="/contact" className="nav-item nav-link">Contacts</NavLink>
                        </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
      {/* <!-- Navbar End --> */}
    </>
  );
}

export default Header;
