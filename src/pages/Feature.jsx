import BreadCrumb from "../components/BreadCrumb";
import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GxpTrainig() {
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
  }, []);
  return (
    <>
      <BreadCrumb page="Feature" />

      <div className="container-fluid section2  py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-right" >
                <img className="img-fluid" src="/Doctor.jpeg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h3 className="mb-4" data-aos="fade-left">Challenges of Paper-Based Systems:</h3>
              <div className="content_container">
                <ul className="list-group"
                  ref={(ref) => listRefs.current.push(ref)}
                >
                  <li className="list-group-item" data-aos="fade-left">
                    <b> Inefficiency and Errors:</b> Manual processes are time-consuming, prone to human error, and lack
                    real-time visibility.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Compliance Complexity: </b>Managing paper trails for documentation and regulations is cumbersome
                    and error-prone, increasing compliance risks.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Data Silos and Limited Insights: </b>Information scattered across paper documents hinders data
                    analysis and informed decision-making.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Collaboration Bottlenecks: </b>Paper-based workflows impede collaboration across departments and
                    hinder agility.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Scalability Issues: </b>Manual processes struggle to adapt to growth, hindering flexibility and
                    innovation.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------2nd Part---------- */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h3 className="mb-4" data-aos="fade-right">Benefits of AI-Assisted Digital Solutions:</h3>
              <div className="content_container">
                <ul>
                  <li className="list-group-item" data-aos="fade-right">
                    <b>EQMS:</b>
                    <ul className="list-group">
                      <li className="list-group-item" data-aos="fade-right">
                        Streamlines quality management processes, ensuring compliance and reducing errors.
                      </li>
                      <li className="list-group-item">Leverages AI for anomaly detection and risk prediction.</li>
                    </ul>
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <b>EDMS:</b>{" "}
                    <ul className="list-group">
                      <li className="list-group-item">
                        Centralizes document management, improving accessibility, searchability, and version control.
                      </li>
                      <li className="list-group-item">
                        Utilizes AI for automated document classification and indexing
                      </li>
                    </ul>
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <b> LMS: </b>{" "}
                    <ul className="list-group">
                      <li className="list-group-item">
                        Simplifies training management, ensuring regulatory compliance and workforce proficiency.
                      </li>
                      <li className="list-group-item">AI personalizes learning pathways and identifies skill gaps.</li>
                    </ul>
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <b>E-Logbook:</b>{" "}
                    <ul className="list-group">
                      <li className="list-group-item">
                        Digitizes data capture for production processes, enabling real-time monitoring and analysis.
                      </li>
                      <li className="list-group-item">
                        {" "}
                        AI provides predictive maintenance insights and anomaly detection.{" "}
                      </li>
                    </ul>
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <b>EBMR:</b>{" "}
                    <ul className="list-group">
                      <li className="list-group-item">
                        Automates pharmacovigilance activities, improving safety monitoring and reporting efficiency.{" "}
                      </li>
                      <li className="list-group-item">
                        AI analyzes adverse event data for faster signal detection and risk assessment.{" "}
                      </li>
                    </ul>
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <b>MES:</b>{" "}
                    <ul className="list-group">
                      <li className="list-group-item">
                        Optimizes manufacturing processes, improving efficiency, quality, and yield.
                      </li>
                      <li className="list-group-item">
                        {" "}
                        AI enables real-time process control and predictive maintenance.{" "}
                      </li>
                    </ul>
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <b>Business Analytics:</b>{" "}
                    <ul className="list-group">
                      <li className="list-group-item">
                        Unlocks insights from diverse data sources for informed decision-making.
                      </li>
                      <li className="list-group-item">
                        AI models identify trends, predict outcomes, and optimize operations.{" "}
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts m-2" data-aos="fade-left" >
                <img className="img-fluid" src="/Emrds.jpeg" />
              </div>
              <div className="abouts m-2" data-aos="fade-left" >
                <img className="img-fluid" src="/e5.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------2nd Part END---------- */}
      {/* ----------3nd Part---------- */}
      <div className="container-fluid section2  py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-right" >
                <img className="img-fluid" src="/Benfit.jpeg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h3 className="mb-4" data-aos="fade-left">Overall Benefits:</h3>
              <div className="content_container">
                <ul className="list-group">
                  <li className="list-group-item" data-aos="fade-left" >
                    <b> Increased Efficiency and Productivity: </b>
                    Streamlined workflows and automated tasks save time and resources.
                  </li>
                  <li className="list-group-item" data-aos="fade-left" >
                    <b>Improved Compliance and Data Integrity: </b>
                    Digital systems ensure data accuracy and facilitate regulatory adherence..
                  </li>
                  <li className="list-group-item" data-aos="fade-left" >
                    <b>Enhanced Collaboration and Visibility: </b>
                    Real-time data sharing fosters better communication and decision-making.
                  </li>
                  <li className="list-group-item" data-aos="fade-left" >
                    <b> Data-Driven Insights and Innovation: </b>
                    Data-Driven Insights and Innovation: AI unlocks hidden patterns and enables proactive measures for
                    better outcomes.
                  </li>
                  <li className="list-group-item" data-aos="fade-left" >
                    <b>Scalability and Future-Proofing: </b>
                    Digital solutions adapt to growth and changing regulations, ensuring long-term sustainability.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------3rd Part END---------- */}
      <div className="ps_paragraph_container mt-3 ">
        <h5 className="ps_paragraph" data-aos="zoom-in" >
          <b>
            By adopting AI-assisted digital solutions, pharma companies can overcome the limitations of paper-based
            systems and gain a competitive edge through improved efficiency, compliance, data-driven insights, and
            innovation.{" "}
          </b>
        </h5>
      </div>
      {/* ----------Para End----------- */}
      {/* ----------4th Part---------- */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h3 className="mb-4" data-aos="fade-right" >Enhanced Data Management and Compliance:</h3>
              <div className="content_container">
                <ul className="list-group"
                  ref={(ref) => listRefs.current.push(ref)}>
                  <li className="list-group-item" data-aos="fade-right">
                    <b>Automated data capture and processing: </b>
                    AI reduces manual data entry errors and streamlines data collection from sensors, instruments, and
                    other sources.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <b>Real-time data monitoring and analysis: </b>
                    AI identifies anomalies and potential compliance issues in real-time, enabling proactive
                    interventions.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <b>Improved audit trails and reporting: </b> AI automatically generates comprehensive audit trails
                    and reports, simplifying compliance audits and reducing manual effort.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <b>Predictive maintenance: </b> AI predicts equipment failures and maintenance needs, minimizing
                    downtime and ensuring GXP compliance.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-left">
                <img className="img-fluid" src="/DataMangement.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------4th Part END---------- */}
      {/* ----------5th Part---------- */}
      <div className="container-fluid section2  py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-right">
                <img className="img-fluid" src="/StreamLine.jpeg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h3 className="mb-4" data-aos="fade-left">Streamlined Workflows and Collaboration:</h3>
              <div className="content_container">
                <ul className="list-group"
                  ref={(ref) => listRefs.current.push(ref)}>
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Intelligent task automation: </b>
                    AI automates repetitive tasks like data analysis, document review, and report generation, freeing up
                    human time for more complex tasks.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b> Smart collaboration tools: </b> AI-powered communication platforms facilitate seamless
                    information sharing and collaboration between teams and across sites.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Personalized user experiences: </b> AI tailors interfaces and workflows to individual user roles
                    and preferences, improving efficiency and user satisfaction.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------5th Part END---------- */}
      {/* ----------6th Part---------- */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h3 className="mb-4" data-aos="fade-right">Optimized Quality Control and Risk Management:</h3>
              <div className="content_container">
                <ul className="list-group"
                  ref={(ref) => listRefs.current.push(ref)}>
                  <li className="list-group-item" data-aos="fade-right">
                    <b>AI-powered defect detection: </b>
                    AI automates repetitive tasks like data analysis, document review, and report generation, freeing up
                    human time for more complex tasks.{" "}
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <b>Risk prediction and mitigation: </b> AI models analyze historical data to predict potential risks
                    and recommend preventive actions, improving decision-making.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <b>Compliance risk assessment: </b> AI identifies areas of potential non-compliance based on
                    regulations and historical data, enabling targeted risk mitigation efforts.{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-left">
                <img className="img-fluid" src="/RiskMangement.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------6th Part END---------- */}
      {/* ----------7th Part---------- */}
      <div className="container-fluid section2  py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-right">
                <img className="img-fluid" src="/AdvancedAnalytics.jpeg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h3 className="mb-4" data-aos="fade-left">Advanced Analytics and Insights:</h3>
              <div className="content_container">
                <ul className="list-group"
                  ref={(ref) => listRefs.current.push(ref)}>
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Machine learning-driven pattern recognition: </b>
                    AI uncovers hidden patterns and trends in large datasets, generating valuable insights for process
                    improvement and innovation.{" "}
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Predictive analytics: </b> AI models predict future outcomes based on historical data, enabling
                    proactive planning and resource allocation.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Enhanced decision-making: </b> AI insights empower stakeholders to make data-driven decisions for
                    improved process efficiency and product quality.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------7th Part END---------- */}
      {/* ----------8th Part---------- */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h3 className="mb-4"data-aos="fade-right">Additional Benefits:</h3>
              <div className="content_container">
                <ul className="list-group" ref={(ref) => listRefs.current.push(ref)}
                >
                  <li className="list-group-item" data-aos="fade-right">
                    <b>Reduced costs: </b>
                    AI-assisted solutions can optimize resource allocation, minimize errors, and streamline workflows,
                    leading to significant cost savings.{" "}
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <b>Improved agility: </b> AI helps businesses adapt to changing regulations and market demands more
                    quickly and efficiently.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <b>Enhanced innovation: </b> AI-driven insights can foster innovation in product development,
                    process optimization, and quality control.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-left">
                <img className="img-fluid" src="/AdditionalBenefits.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------8th Part END---------- */}

      <div className="ps_paragraph_container m-3 ">
        <h5 className="ps_paragraph" data-aos="zoom-in">
          <b>
            Overall, AI-assisted digital GXP solutions offer a wide range of features that can transform how life
            sciences organizations manage data, control processes, ensure compliance, and drive innovation.
          </b>
        </h5>
      </div>
    </>
  );
}
