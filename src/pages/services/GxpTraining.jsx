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
    <div className="top_container m-5">
      <div className="service_headingr">
        <h1 className="heading" data-aos="fade-down">GxP Training </h1>
      </div>

      <div className="bottom_line_container">
        <h5 className="bottom_line" data-aos="zoom-in">GxP Compliance Training for Regulated Pharma Companies: A Detailed Summary</h5>
      </div>
      <div className="paragraph_container">
        <p className="paragraph" data-aos="fade-down">
          This training program is designed for employees in all levels and departments of regulated pharmaceutical
          companies who need to understand and comply with GxP (Good practice) regulations.
        </p>
      </div>

      <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-right">
                <img className="img-fluid" src="/IMG18.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="why_line" data-aos="fade-left">Objectives:</h4>
              <div className="content_container">

                <ul className="list-group">
                  <li className="list-group-item" data-aos="fade-left">
                    Equip participants with a comprehensive understanding of GxP principles and their application in the
                    pharmaceutical industry.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    Deepen knowledge of specific GxP regulations relevant to their roles and responsibilities.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    Develop skills to implement GxP requirements effectively in daily operations.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">Foster a culture of quality and compliance within the organization.</li>
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
              <h4 className="why_line" data-aos="fade-right">Course Modules:</h4>
              <div className="content_container">
                <ul>
                  <li data-aos="fade-right">
                    <b>Introduction to GxP:</b>{" "}
                  </li>
                  <ul className="list-group">
                    <li className="list-group-item" data-aos="fade-right">
                      Overview of different GxP regulations (GMP, GLP, GCP, GDP) and their key requirements.
                    </li>
                    <li className="list-group-item" data-aos="fade-right">
                      Significance of GxP compliance for patient safety, product quality, and regulatory approvals.
                    </li>
                  </ul>
                  <li data-aos="fade-right">
                    <b> GxP Essentials:</b>{" "}
                    <ul className="list-group">
                      <li className="list-group-item">
                        Quality management systems (QMS) principles and implementation within the pharmaceutical industry.{" "}
                      </li>
                      <li className="list-group-item"> Data integrity and documentation best practices. </li>
                      <li className="list-group-item"> Change control procedures and risk management principles. </li>
                      <li className="list-group-item"> Quality audits and inspections preparation. </li>
                    </ul>
                  </li>
                  <li data-aos="fade-right">
                    <b> Specific GxP Regulations: </b>{" "}
                    <ul className="list-group">
                      <li className="list-group-item">
                        In-depth exploration of relevant GxP regulations based on the company's operations (e.g., GMP for
                        manufacturing, GLP for preclinical studies, GCP for clinical trials).{" "}
                      </li>
                      <li className="list-group-item">
                        Case studies and practical examples of applying GxP requirements in specific scenarios.{" "}
                      </li>
                    </ul>
                  </li>
                  <li data-aos="fade-right">
                    <b> GxP Implementation Strategies:</b>{" "}
                    <ul className="list-group">
                      <li className="list-group-item">
                        Effective communication and training strategies for embedding GxP culture within the organization.{" "}
                      </li>
                      <li className="list-group-item"> Leveraging technology for GxP compliance management. </li>
                      <li className="list-group-item">
                        Continual improvement processes for maintaining and enhancing compliance.{" "}
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-left">
                <img className="img-fluid" src="/lab.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-right">
                <img className="img-fluid" src="/Doctor.jpeg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="why_line" data-aos="fade-left">Benefits:</h4>
              <div className="content_container">

                <ul className="list-group">
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Reduced risk of non-compliance: </b>
                    Participants gain the knowledge and skills to implement GxP regulations effectively, minimizing the risk of
                    regulatory violations and associated penalties.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Improved product quality and safety: </b>Consistent adherence to GxP standards ensures product quality
                    and patient safety, fostering trust and reputation.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Enhanced operational efficiency: </b> Implementing GxP principles can streamline processes, improve data
                    management, and boost overall operational efficiency.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Increased employee engagement: </b> Empowering employees with GxP knowledge fosters a culture of quality
                    and ownership, leading to increased engagement and responsibility.
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
              <h4 className="why_line" data-aos="fade-right">Additional Considerations:</h4>
              <div className="content_container">
                <ul className="list-group">
                  <li className="list-group-item" data-aos="fade-right">
                    <b>On-site training: </b>
                    Tailored programs delivered at your company facility to suit specific needs and schedules.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <b> Online training: </b>Flexible e-learning modules accessible anytime, anywhere for individual or group
                    learning.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <b> Blended learning: </b> Implementing GxP principles can streamline processes, improve data management,
                    and boost overall operational efficiency.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-left">
                <img className="img-fluid" src="/lab.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-right">
                <img className="img-fluid" src="/Doctor.jpeg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="why_line" data-aos="fade-left">The EQMS elixir:</h4>
              <div className="content_container">
                <ul className="list-group">
                  <li className="list-group-item" data-aos="fade-left">
                    <b>Customization: </b>
                    Training content can be adapted to address specific company processes, products, and regulatory
                    requirements.{" "}
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b> Pre- and post-training assessments: </b> Evaluate the knowledge level of the participants and measure
                    the impact of the training.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b> Ongoing support: </b> Provide ongoing support through консультации, Q&A forums, and refresher sessions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="ps_paragraph_container mt-5 ">
        <h5 className="ps_paragraph" data-aos="zoom-in">
          <b>
            By investing in GxP compliance training, regulated pharma companies can ensure they are operating according
            to the highest standards, safeguarding product quality, patient safety, and regulatory compliance.
          </b>
        </h5>
      </div>
    </div>
  );
}
