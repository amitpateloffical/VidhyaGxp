// import "./Header.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faAngleRight, faEnvelopeOpenText, faPhone, faSignsPost } from "@fortawesome/free-solid-svg-icons";

// function Header() {
//   const navigate = useNavigate();


//   return (
//     <>
//       {/* <!-- Navbar Start --> */}
//       <div className="header-section">
//         <div className="container-fluid">
//       <div className="container">
//         <div className="row">
//             <div className="top-nav">
// <div className="d-flex flex-row-reverse pt-2">
// <div >
//                 <FontAwesomeIcon icon={faEnvelopeOpenText} className="me-3 text-white " />
//                <span className="text-white fw-bolder">info@VidhyaGxP.com</span> 
//               </div> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
//               <div >
//                 <FontAwesomeIcon icon={faPhone} className="me-3 text-white" />
//                <span className="text-white fw-bolder">+91-8821836528</span> 
//               </div>

// </div>
// </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container-fluid">
//         <div className="container">
//           <nav className="navbar navbar-expand-lg navbar-dark p-0 py-5">
//             <Link to="/" className="navbar-brand">
//               <img style={{ height:"250px" }} src="vidhyaGxp.png" alt="VidhyaGxP" />
//             </Link>
//             <button
//               type="button"
//               className="navbar-toggler ms-auto me-0"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarCollapse"
//             ></button>
//             <div className="collapse navbar-collapse" id="navbarCollapse">
//               <div className="navbar-nav ms-auto">
//                 <NavLink to="/" className="nav-item nav-link">
//                   Home
//                 </NavLink>
//                 <NavLink to="/about" className="nav-item nav-link">
//                   About
//                 </NavLink>
//                 <NavLink
//                   to="/services"
//                   className="nav-item nav-link"
//                   onClick={(e) => {
//                     e.preventDefault(); // Prevents the default navigation behavior
//                     e.stopPropagation(); // Stops event propagation to prevent interference with NavLink
//                     // navigate("/services"); // Manually navigate to the desired route
//                   }}
//                 >
//                   <div className="dropdown">
//                     <div>
//                       Service &nbsp;
//                       <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                           fill="currentColor"
//                           d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16"
//                         />
//                       </svg>
//                     </div>
//                     <div className="dropdown-content">
//                       <ul>
//                         <li onClick={() => navigate("/ebmr")}>e-BMR</li>
//                         <li onClick={() => navigate("/elogbook")}>e-LogBook</li>
//                         <li onClick={() => navigate("/lms")}>LMS</li>
//                         <li onClick={() => navigate("/mes")}>MES</li>
//                         <li onClick={() => navigate("/edms")}>EDMS</li>
//                         <li onClick={() => navigate("/eqms")}>EQMS</li>
//                         <li onClick={() => navigate("/quality-risk-management")}>Quality Risk Management</li>
//                         <li onClick={() => navigate("/pharma-audit")}>Pharma Audit & Remediation</li>
//                         <li onClick={() => navigate("/root-cause-analysis")}>Automated Root Cause Analysis</li>
//                         <li onClick={() => navigate("/warehouse-management")}>Warehouse management system</li>
//                         <li onClick={() => navigate("/paperless-microbiology")}>Paper less microbiology</li>
//                         <li onClick={() => navigate("/usfda-warning-letter-management")}>
//                           USFDA warning letter management
//                         </li>
//                         <li onClick={() => navigate("/merger-and-acquisition")}>Merger & acquisition</li>
//                         <li onClick={() => navigate("/ai-assited-culture-of-quality")}>
//                           AI-Assisted Culture of Quality
//                         </li>
//                         <li onClick={() => navigate("/connected-and-integrated-gxp-systems")}>
//                           Connected & Integrated GXP Systems
//                         </li>
//                         <li onClick={() => navigate("/ai-assited-pharma")}>AI-Assisted Pharma 4.0</li>
//                         <li onClick={() => navigate("/intelligent-pharma")}>
//                           Intelligent Pharma Manufacturing Factory
//                         </li>
//                         <li onClick={() => navigate("/gxp-training")}>GxP Training </li>
//                         <li onClick={() => navigate("/rpa")}>Robotic Process Automation (RPA) </li>
//                       </ul>

//                     </div>
//                   </div>
//                 </NavLink>


//                 <NavLink to="/industries" className="nav-item nav-link">
//                   Industries
//                 </NavLink>
//                 <NavLink to="/features" className="nav-item nav-link">
//                   Features
//                 </NavLink>
//                 <NavLink to="/contact" className="nav-item nav-link">
//                   Contact Us
//                 </NavLink>

//               </div>
//               <button
//                 type="button"
//                 className="btn text-white p-0 d-none d-lg-block"
//                 data-bs-toggle="modal"
//                 data-bs-target="#searchModal"
//               >
//                 <i className="fa fa-search"></i>
//               </button>
//             </div>
//           </nav>
//         </div>




//       </div>
//       {/* <!-- Navbar End --> */}
//     </>
//   );
// }

// export default Header;



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
                    <span className="text-white fw-bolder">info@VidhyaGxP.com</span>
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
                  <Link className="dropdown-item" to="/emergingmarkets">LMS</Link>
                  <Link className="dropdown-item" to="/usgenerics">MES</Link>
                  <Link className="dropdown-item" to="/africainstitution">EDMS</Link>
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