import { useEffect, useRef, } from "react";
import BreadCrumb from "../components/BreadCrumb";
import AOS from "aos";
import "aos/dist/aos.css";


function About() {
  const listRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 1400 });
    // AOS.refresh();
  }, []);

  useEffect(() => {
    if (listRefs.current) {
      ""
    }
    const observers = [];

    listRefs.current.forEach((listRef) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const listItems =
              listRef.current.querySelectorAll(".list-group-item");
            listItems.forEach((item) => {
              item.classList.add("list-item-animation");
            });
            observer.unobserve(entry.target);
          }
        });
      });

      if (listRef.current) {
        observer.observe(listRef.current);
      }
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [listRefs]);

  return (
    <>
      <BreadCrumb page="About Us" />

      {/* <!-- About Start --> */}

      <div className="container-fluid   py-3">
        <div className="container py-4">
          <div className="row g-2 align-items-center">
            <div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
              <h3 className=" text-center fs-2 pt-3">
                Lifelink Digital: Streamlining GxP Compliance for Global Pharma
              </h3>
              <div className="paragraph_container ">
                <p className="paragraph fs-5 pt-2">
                  Lifelink Digital is a leading global provider of GxP software
                  solutions, empowering pharmaceutical and life sciences
                  companies to achieve and maintain compliance efficiently. With
                  a deep understanding of GxP regulations and industry best
                  practices, we offer a comprehensive suite of software
                  solutions designed to streamline:
                </p>
              </div>
              <p className="mb-4"></p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-fluid section2  py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-6 wow fadeIn"
              data-aos="fade-right"
              data-wow-delay="0.1s"
            >
              <div className="abouts">
                <img className="img-fluid" src="/abouts.jpg" />
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeIn"
              // data-aos="fade-left"
              data-wow-delay="0.5s"
            >
              <p className="mb-4"></p>

              <div className="content_container">
                <ul
                  className="list-group"
                  ref={(ref) => listRefs.current.push(ref)}
                >
                  <li className="list-group-item" data-aos="fade-left">
                    <b> AI-driven insights: </b>
                    Leverage artificial intelligence to analyze pharmaceutical
                    data, predict trends, and optimize decision-making
                    processes, enhancing efficiency and innovation in drug
                    development and patient care.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Data integrity and quality management</b>
                    Ensure data accuracy and traceability across your entire
                    workflow with our data management solutions.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b> Document management and control: </b>Simplify document
                    creation, review, approval, and version control with our
                    intuitive document management system.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b> Regulatory compliance: </b> Stay ahead of regulatory
                    changes with our automated solutions for risk management,
                    audit trails, and electronic signatures.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b> Quality management systems: </b>Implement and manage
                    your QMS effectively with our integrated quality management
                    software.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b> Collaboration and communication: </b>Foster seamless
                    collaboration across teams and departments with our secure
                    communication and workflow management tools.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h3 className="mb-4" data-aos="fade-right">
                By partnering with Lifelink Digital, you can:
              </h3>
              <div className="content_container">
                <ul
                  className="list-group"
                  ref={(ref) => listRefs.current.push(ref)}
                >
                  <li className="list-group-item" data-aos="fade-right">
                    <b> Reduce costs and improve efficiency </b>
                    Eliminate manual processes and centralize data management
                    for significant cost savings and increased operational
                    efficiency.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <b> Minimize risk and ensure compliance: </b>Mitigate
                    regulatory risks and ensure consistent compliance with our
                    validated and configurable software solutions.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <b> Improve data quality and visibility: </b> Gain complete
                    visibility into your data and processes for better
                    decision-making and improved data integrity.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <b> Scale with confidence: </b>Our flexible and scalable
                    solutions adapt to your evolving needs as your business
                    grows.
                  </li>
                </ul>
              </div>

              <div
                className="ps_paragraph_container mt-2 bg"
                data-aos="fade-right"
              >
                <h5 className="ps_paragraph">
                  Contact Lifelink Digital today to discover how our GxP
                  software solutions can help you achieve your compliance and
                  quality goals
                </h5>
              </div>
            </div>

            <div
              className="col-lg-6 wow fadeIn"
              data-aos="fade-left"
              data-wow-delay="0.1s"
            >
              <div className="abouts">
                <img className="img-fluid" src="/about4.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- About End --> */}
      <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-6 wow fadeIn "
              data-aos="fade-right"
              data-wow-delay="0.1s"
            >
              <div className="aboutsimg">
                <img className="img-fluid" src="/about5.jpg" />
              </div>
            </div>

            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="why_line" data-aos="fade-left">
                Quality Policy
              </h4>
              <div className="paragraph_container" data-aos="fade-left">
                <p className="paragraph">
                  Lifelink Digital is committed to providing the highest quality
                  GxP software and services to the global pharmaceutical
                  industry. We are dedicated to exceeding our customers'
                  expectations and ensuring that our products and services
                  comply with all applicable regulatory requirements.
                </p>
              </div>
              {" "}
              <h3 className="mb-4" data-aos="fade-left">
                By partnering with Lifelink Digital, you can:
              </h3>
              <div className="content_container">
                <ul
                  className="list-group"
                  ref={(ref) => listRefs.current.push(ref)}
                >
                  <li className="list-group-item" data-aos="fade-left">
                    <b> Customer Focus: </b>We understand that our success
                    depends on the success of our customers. We are committed to
                    listening to their needs and exceeding their expectations.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b> Quality by Design: </b>We build quality into our
                    products and services from the very beginning. We use a
                    risk-based approach to identify and mitigate potential
                    quality problems.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b> Continuous Improvement: </b>We are committed to
                    continually improving our products, services, and processes.
                    We use a data-driven approach to identify areas for
                    improvement and implement effective change.
                  </li>

                  <li className="list-group-item" data-aos="fade-left">
                    <b> Regulatory Compliance: </b>We are committed to complying
                    with all applicable GxP regulations and industry standards.
                    We maintain a comprehensive quality management system (QMS)
                    to ensure compliance.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b> Employee Engagement: </b>We believe that our employees
                    are our most valuable asset. We empower our employees to
                    take ownership of quality and provide them with the training
                    and resources they need to be successful.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              {/* <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">About Us</div> */}
              <h3 className="mb-4" data-aos="fade-right">
                To achieve these goals, we will:
              </h3>
              <div className="content_container">
                <ul
                  className="list-group"
                  ref={(ref) => listRefs.current.push(ref)}
                >
                  <li className="list-group-item" data-aos="fade-right">
                    Implement and maintain a documented QMS that meets the
                    requirements of relevant GxP regulations and industry
                    standards.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    Conduct regular risk assessments to identify and mitigate
                    potential quality problems.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    Conduct regular training for our employees on quality
                    principles and procedures.
                  </li>

                  <li className="list-group-item" data-aos="fade-right">
                    Develop and implement quality control procedures for all of
                    our products and services.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    Conduct regular training for our employees on quality
                    principles and procedures.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    Continuously review and update our quality policy to ensure
                    that it remains relevant and effective.
                  </li>
                </ul>
              </div>
              <div
                className="ps_paragraph_container mt-2 bg"
                data-aos="fade-right">
                <h5 className="ps_paragraph">
                  We are committed to providing our customers with the highest
                  quality products and services possible. We believe that our
                  quality policy is a key factor in our success and we are
                  committed to its continuous improvement.
                </h5>
              </div>
            </div>

            <div
              className="col-lg-6 wow fadeIn"
              data-aos="fade-left"
              data-wow-delay="0.1s"
            >
              <div className="abouts">
                <img className="img-fluid" src="/about6.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-6 wow fadeIn"
              data-aos="fade-right"
              data-wow-delay="0.1s"
            >
              <div className="abouts">
                <img className="img-fluid" src="/systemmanagement.jpeg" />
              </div>
            </div>

            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="why_line" data-aos="fade-left">
                Mission Statement
              </h4>
              <div className="paragraph_container" data-aos="fade-left">
                <p className="paragraph">
                  At Lifelink Digital, we empower the global pharmaceutical
                  industry to achieve GxP compliance and accelerate life-saving
                  innovations with intuitive, secure, and scalable software
                  solutions.
                </p>
              </div>
              <h3 className="mb-4" data-aos="fade-left">
                Through our relentless dedication to:
              </h3>
              <div className="content_container">
                <ul
                  className="list-group"
                  ref={(ref) => listRefs.current.push(ref)}
                >
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Innovation: </b>We continuously develop cutting-edge
                    technology that simplifies complex GxP processes, fostering
                    agility and efficiency.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Collaboration: </b>We foster partnerships with our
                    clients, understanding their unique needs and building
                    solutions that drive success.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Compliance:</b>: We ensure our software adheres to the
                    highest GxP standards, providing peace of mind and
                    regulatory confidence.
                  </li>

                  <li className="list-group-item" data-aos="fade-left">
                    <b>Security: </b>We protect sensitive data with robust
                    security measures, mitigating risks and safeguarding patient
                    safety.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Scalability: </b>We design flexible solutions that adapt
                    to your evolving needs, supporting your growth journey.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
              data-aos="fade-right"
            >
              <h3 className="mb-4">
                We strive to be the trusted partner for pharmaceutical companies
                worldwide, enabling them to:
              </h3>
              <div className="content_container">
                <ul
                  className="list-group"
                  ref={(ref) => listRefs.current.push(ref)}
                >
                  <li className="list-group-item" data-aos="fade-left">
                    Streamline regulatory compliance processes, saving time and
                    resources.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    Improve data quality and integrity, ensuring regulatory
                    adherence.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    Enhance collaboration and communication across teams and
                    geographies.
                  </li>

                  <li className="list-group-item" data-aos="fade-left">
                    Accelerate research and development timelines, bringing
                    life-saving innovations to market faster.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    Gain invaluable insights from data to optimize operations
                    and decision-making.
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-6 wow fadeIn"
              data-aos="fade-left"
              data-wow-delay="0.1s"
            >
              <div className="abouts">
                <img className="img-fluid" src="/System.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-6 wow fadeIn"
              data-aos="fade-right"
              data-wow-delay="0.1s"
            >
              <div className="abouts">
                <img className="img-fluid" src="/medicine.jpeg" />
              </div>
            </div>

            <div
              className="col-lg-6 wow fadeIn"
              data-aos="fade-left"
              data-wow-delay="0.5s"
            >
              <div className="paragraph_container">
                <p className="paragraph">
                  Ultimately, at Lifelink Digital, we believe in the power of
                  technology to transform the pharmaceutical industry and
                  improve the lives of patients everywhere.
                </p>
              </div>
              <h3 className="mb-4" data-aos="fade-left">
                {" "}
                  This mission statement reflects our commitment to:
              </h3>
              <div className="content_container">
                <ul
                  className="list-group"
                  ref={(ref) => listRefs.current.push(ref)}
                >
                  <li className="list-group-item" data-aos="fade-left">
                    Being a leader in GxP software solutions.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    Using AI to achieve true Industry 4.0
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    Turning data into wisdom
                  </li>

                  <li className="list-group-item" data-aos="fade-left">
                    Making a positive impact on the world.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    Building a culture of innovation, collaboration, and
                    excellence.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
