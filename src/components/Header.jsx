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
                src="/vidyaGxp_logo.png"
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
              <li className="nav-item" style={{ padding: "0px" , height:"20px" }}>
                <MultilevelDropdown
                  title="Services"
                  menuClassName="dropdown-menu"
                  buttonClassName="nav-link dropdown-toggle"
                  arrowClassName="caret"
                  style={{ height: "26px", background:"none" }}
                >
                  <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                    <Link className="dropdown-item" to="/ebmr">
                      e-BMR
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                    <Link className="dropdown-item" to="/elogbook">
                      e-LogBook
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                    <Link className="dropdown-item" to="/lms">
                      LMS
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                    <Link className="dropdown-item" to="/mes">
                      MES
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                    <Link className="dropdown-item" to="/edms">
                      EDMS
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                    <Link className="dropdown-item" to="/eqms">
                      EQMS
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                    <Link className="dropdown-item" to="/quality-risk-management">
                      Quality Risk Management
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                    <Link className="dropdown-item" to="/pharma-audit">
                      Pharma Audit & Remediation
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                    <Link className="dropdown-item" to="/root-cause-analysis">
                      Automated Root Cause Analysis
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                    <Link className="dropdown-item" to="/warehouse-management">
                      Warehouse management system
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                    <Link className="dropdown-item" to="/connected-and-integrated-gxp-systems">
                      Connected & Integrated GXP Systems
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                    <Link className="dropdown-item" to="/ai-assited-pharma">
                      AI-Assisted Pharma 4.0
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                    <Link className="dropdown-item" to="/intelligent-pharma">
                      Intelligent Pharma Manufacturing Factory
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                    <Link className="dropdown-item" to="/gxp-training">
                      GxP Training
                    </Link>
                  </MultilevelDropdown.Item>
                  <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                    <Link className="dropdown-item" to="/rpa">
                      Robotic Process Automation (RPA)
                    </Link>
                  </MultilevelDropdown.Item >
                  <MultilevelDropdown.Item style={{ padding: "0px" }} title="Engineering">
                    <Link className="dropdown-item" to="#">
                      Engineering
                    </Link>
                    <MultilevelDropdown.Submenu className="dropdown-submenu">
                    <MultilevelDropdown.Item style={{ padding: "0px" , margin: "0px" }}>
                        <Link className="dropdown-item" to="/engineer/feasibility-studies">
                          Feasibility Studies
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/engineer/site-selection">
                          Site Selection
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/engineer/facility-design">
                          Facility Design and Layout
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/engineer/design-risk">
                          Design Risk Assessment
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/engineer/detailed-engineering">
                          Detailed Engineering Design
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/engineer/regulatory-compliance">
                          Regulatory Compliance
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/engineer/project-management">
                          Project Management
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/engineer/technology-equipment">
                          Technology and Equipment Selection
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/engineer/commissioning-qualification">
                          Commissioning and Qualification
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/engineer/quality-assurance">
                          Quality Assurance and Control
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/engineer/training-capacity-building">
                          Training and Capacity Building
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/engineer/contractual-closeout">
                          Contractual Closeout
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/engineer/post-project-review">
                          Post Project Review
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/engineer/supply-chain-management">
                          Supply Chain Management
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/engineer/financial-analysis">
                          Financial Analysis and Business Planning
                        </Link>
                      </MultilevelDropdown.Item>
                    </MultilevelDropdown.Submenu>
                  </MultilevelDropdown.Item>


                  <MultilevelDropdown.Item style={{ padding: "0px" }} title="Engineering">
                    <Link className="dropdown-item" to="#">
                      Qalification & Validation
                    </Link>
                    <MultilevelDropdown.Submenu className="dropdown-submenu">
                    <MultilevelDropdown.Item style={{ padding: "0px" , margin: "0px" }}>
                        <Link className="dropdown-item" to="/qualificationvalidation/user-requirements-specification">
                          User Requirement Specification (URS)
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/qualificationvalidation/design-qualification">
                          Design Qualification And Design Reviews
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/qualificationvalidation/factory-site-acceptance">
                          FAT (Factory Acceptance tests)/ SAT (Site Acceptance Tests)
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/qualificationvalidation/installation-qualification">
                        Installation Qualification
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/qualificationvalidation/operation-qualification">
                        Operation Qualification (OQ)
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/qualificationvalidation/standard-operating-procedure">
                        Standard Operating Procedure
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/qualificationvalidation/performance-qualification">
                        Performance Qualification
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/qualificationvalidation/process-cleaning-validation">
                        Process Validation/ Cleaning Validation
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="qualificationvalidation/risk-assessment">
                        Risk Assessment
                        </Link>
                      </MultilevelDropdown.Item>
                    </MultilevelDropdown.Submenu>
                  </MultilevelDropdown.Item>


                  <MultilevelDropdown.Item style={{ padding: "0px" }} title="Engineering">
                    <Link className="dropdown-item" to="#">
                    QMS Implementation
                    </Link>
                    <MultilevelDropdown.Submenu className="dropdown-submenu">
                    <MultilevelDropdown.Item style={{ padding: "0px" , margin: "0px" }}>
                        <Link className="dropdown-item" to="/dropqmsimplementation/developing-procedures-qms">
                        Developing QMS Policies and Procedures
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/dropqmsimplementation/training-awareness">
                        Training and Awareness
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/dropqmsimplementation/gap-analysis">
                        Gap Analysis
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/dropqmsimplementation/investigation-support">
                        Investigation Support
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/dropqmsimplementation/root-cause-analysis">
                        Root Cause Analysis
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/dropqmsimplementation/qms-monitoring-measurement">
                        QMS Monitoring and Measurement
                        </Link>
                      </MultilevelDropdown.Item>
                    </MultilevelDropdown.Submenu>
                  </MultilevelDropdown.Item>

                  <MultilevelDropdown.Item style={{ padding: "0px" }} title="Engineering">
                    <Link className="dropdown-item" to="#">
                    Technology Transfer and Product Development Support
                    </Link>
                    <MultilevelDropdown.Submenu className="dropdown-submenu">
                    <MultilevelDropdown.Item style={{ padding: "0px" , margin: "0px" }}>
                        <Link className="dropdown-item" to="/technologytransferproductdevelopmentsupport/assessment-feasibil">
                        Feasibility Assessment
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/technologytransferproductdevelopmentsupport/process-optimization">
                        Process Optimization
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/technologytransferproductdevelopmentsupport/regulatory-compliances">
                        Regulatory Compliance
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/technologytransferproductdevelopmentsupport/documentation-preparation">
                        Documentation Preparation
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/technologytransferproductdevelopmentsupport/risk-assessment-mitigations">
                        Risk Assessment and Mitigation
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/technologytransferproductdevelopmentsupport/technology-transfer-execution">
                        Technology Transfer Execution
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/technologytransferproductdevelopmentsupport/scale-up-assistance">
                        Scale-Up Assistance
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/technologytransferproductdevelopmentsupport/analytical-method-development">
                        Analytical Method Development
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/technologytransferproductdevelopmentsupport/quality-assurance-compliance">
                        Quality Assurance and Compliance
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/technologytransferproductdevelopmentsupport/project-managementes">
                        Project Management
                        </Link>
                      </MultilevelDropdown.Item>
                    </MultilevelDropdown.Submenu>
                  </MultilevelDropdown.Item>


                  <MultilevelDropdown.Item style={{ padding: "0px" }} title="Engineering">
                    <Link className="dropdown-item" to="#">
                    Regulatory Submissions
                    </Link>
                    <MultilevelDropdown.Submenu className="dropdown-submenu">
                    <MultilevelDropdown.Item style={{ padding: "0px" , margin: "0px" }}>
                        <Link className="dropdown-item" to="/regulatorysubmission/regulatory-authorities">
                        Submissions to Regulatory Authorities
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/regulatorysubmission/document-review-elimination">
                        Document Review and Elimination of Queries/Rejection
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/regulatorysubmission/drug-master">
                        Drug Master File (DMF) Compilation
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/regulatorysubmission/response-regulatory-queries">
                        Response to Regulatory Queries
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/regulatorysubmission/regulatory-compliance-gap">
                        Regulatory Compliance and Gap Analysis
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/regulatorysubmission/post-approval-changes-submissions">
                        Post-Approval Changes Submissions
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/regulatorysubmission/guidance-anda-dmf">
                        Guidance for ANDA and DMFs Preparation
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/technologytransferproductdevelopmentsupport/quality-assurance-compliance">
                        Quality Assurance and Compliance
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/regulatorysubmission/lifecycle-management">
                        Lifecycle Management (LCM)
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/regulatorysubmission/investigational-new-drug">
                        Investigational New Drug Applications (INDA) Submission
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/regulatorysubmission/abbreviated-new-drug">
                        Review of Abbreviated New Drug Application (ANDA) Submissions
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/regulatorysubmission/drug-master-file-submissions">
                        Review of Drug Master File (DMF) Submissions
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/regulatorysubmission/remedial-action-plan">
                        Support for Remedial Action Plan (RAP) Post FDA Inspection  
                                              </Link>
                      </MultilevelDropdown.Item>
                    </MultilevelDropdown.Submenu>
                  </MultilevelDropdown.Item>

                  <MultilevelDropdown.Item style={{ padding: "0px" }} title="Engineering">
                    <Link className="dropdown-item" to="#">
                    GMP Certification Services
                    </Link>
                    <MultilevelDropdown.Submenu className="dropdown-submenu">
                    <MultilevelDropdown.Item style={{ padding: "0px" , margin: "0px" }}>
                        <Link className="dropdown-item" to="/gms-certification-services/pre-pos-inspection-audits">
                        Pre and Post Inspection Audits
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/gms-certification-services/audit-compliance-reports">
                        Audit Compliance Reports
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/gms-certification-services/facility-upgradation-gmp-compliance">
                        Facility Upgradation for GMP Compliance
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/gms-certification-services/mock-audits">
                        Mock Audits
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/gms-certification-services/due-diligence-audits">
                        Due Diligence Audits
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/gms-certification-services/gap-assessment-audit">
                        GAP Assessment Audit
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/gms-certification-services/investigation-audit">
                        Investigation Audit
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/gms-certification-services/surveillance-audit">
                        Surveillance Audit
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/gms-certification-services/follow-audit-capa-review">
                        Follow-up Audit and CAPA Review
                        </Link>
                      </MultilevelDropdown.Item>
                    </MultilevelDropdown.Submenu>
                  </MultilevelDropdown.Item>


                  <MultilevelDropdown.Item style={{ padding: "0px" }} title="Engineering">
                    <Link className="dropdown-item" to="#">
                    Audit
                    </Link>
                    <MultilevelDropdown.Submenu className="dropdown-submenu">
                    <MultilevelDropdown.Item style={{ padding: "0px" , margin: "0px" }}>
                        <Link className="dropdown-item" to="/feasibility-studies">
                        GMP Audits for API and Starting Materials
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/site-selection">
                        Supplier and Excipient Audits
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/facility-design">
                        GMP Audits for Third-Party Manufacturers
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/design-risk-assessment">
                        Packaging Material Audits
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/detailed-engineering-design">
                        Third-Party Manufacturing Execution
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/regulatory-compliance">
                        QM System Audits
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/project-management">
                        GDP and GLP Audits
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/technology-equipment-selection">
                        Root Cause Audits
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/commissioning">
                        cGMP Consultants for Strategic Consulting
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/quality-assurance">
                        GAP Analysis and Mock Audits
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/training-capacity-building">
                        Onsite cGMP Consultants
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/contractual-closeout">
                        Audit Library
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/post-project-review">
                        Upcoming Audit Schedule
                        </Link>
                      </MultilevelDropdown.Item>
                    </MultilevelDropdown.Submenu>
                  </MultilevelDropdown.Item>

                  <MultilevelDropdown.Item style={{ padding: "0px" }} title="Engineering">
                    <Link className="dropdown-item" to="#">
                    Regulated Market Access
                    </Link>
                    <MultilevelDropdown.Submenu className="dropdown-submenu">
                    <MultilevelDropdown.Item style={{ padding: "0px" , margin: "0px" }}>
                        <Link className="dropdown-item" to="/feasibility-studies">
                        Product, Market & Regulatory Pathway Strategy
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/site-selection">
                        Regulatory Strategy for Emerging Markets
                        </Link>
                      </MultilevelDropdown.Item>
                    </MultilevelDropdown.Submenu>
                  </MultilevelDropdown.Item>

                  <MultilevelDropdown.Item style={{ padding: "0px" }} title="Engineering">
                    <Link className="dropdown-item" to="#">
                    QMS Consulting
                    </Link>
                    <MultilevelDropdown.Submenu className="dropdown-submenu">
                    <MultilevelDropdown.Item style={{ padding: "0px" , margin: "0px" }}>
                        <Link className="dropdown-item" to="/feasibility-studies">
                        Engineering Solutions
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/site-selection">
                        Qualification and Validation
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/facility-design">
                        QMS Support
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/design-risk-assessment">
                        Regulatory Services
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/detailed-engineering-design">
                        Contractor Collaboration
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/regulatory-compliance">
                        Training Solutions
                        </Link>
                      </MultilevelDropdown.Item>
                    </MultilevelDropdown.Submenu>
                  </MultilevelDropdown.Item>

                  <MultilevelDropdown.Item style={{ padding: "0px" }} title="Engineering">
                    <Link className="dropdown-item" to="#">
                    Training
                    </Link>
                    <MultilevelDropdown.Submenu className="dropdown-submenu">
                    <MultilevelDropdown.Item style={{ padding: "0px" , margin: "0px" }}>
                        <Link className="dropdown-item" to="/feasibility-studies">
                        Good Manufacturing Practices (GMP) Training
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/site-selection">
                        Quality Control and Quality Assurance Training
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/facility-design">
                        Regulatory Compliance Training
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/design-risk-assessment">
                        Safety and Environmental Training
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/detailed-engineering-design">
                        Current Good Clinical Practice (cGCP) Training
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/regulatory-compliance">
                        Data Integrity Training
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/project-management">
                        Pharmacovigilance Training:
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/technology-equipment-selection">
                        Process Validation Training
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/commissioning">
                        Computer System Validation Training
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/quality-assurance">
                        SOP and Documentation Training
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/training-capacity-building">
                        Health and Hygiene Training
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/contractual-closeout">
                        Product Specific Training
                        </Link>
                      </MultilevelDropdown.Item>
                      <MultilevelDropdown.Item style={{ padding: "0px", margin: "0px" }}>
                        <Link className="dropdown-item" to="/post-project-review">
                        Leadership and Soft Skills Training
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
