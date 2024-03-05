import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Rpa() {
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
      <div className="service_headingr" data-aos="fade-down">
        <h1 className="heading">RPA </h1>
      </div>

      <div className="bottom_line_container">
        <h5 className="bottom_line" data-aos="zoom-in">Robotic Process Automation (RPA) in Pharma Companies: A Detailed Summary</h5>
      </div>
      <div className="paragraph_container">
        <p className="paragraph">
          <div className="paragraph_container">
            <p className="paragraph" data-aos="fade-down">
              RPA utilizes software "robots" to automate repetitive, rule-based tasks traditionally performed by humans.
              These robots interact with applications and systems like humans do, mimicking clicks, keystrokes, and data
              entry, but with increased speed, accuracy, and tireless operation.
            </p>
          </div>
        </p>
      </div>

      <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-right">
                <img className="img-fluid" src="/IMG19.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="why_line" data-aos="fade-left">Why Use RPA in Pharma?</h4>
              <div className="content_container">
                <ul>
                  <li data-aos="fade-left">
                    <strong>The pharmaceutical industry faces pressure to:-</strong>
                  </li>
                  <li data-aos="fade-left">
                    <b> Reduce costs: </b>
                    Streamline processes and free up workforce for higher-value tasks.
                  </li>
                  <li data-aos="fade-left">
                    <b> Increase efficiency: </b>Accelerate workflows and reduce time to market.
                  </li>
                  <li data-aos="fade-left">
                    <b> Improve accuracy: </b> Minimize human error and ensure data integrity.
                  </li>
                  <li data-aos="fade-left">
                    <b> Enhance compliance: </b>Automate tasks related to reporting and regulatory requirements.
                  </li>
                  <li data-aos="fade-left">
                    <strong>RPA directly addresses these needs by:-</strong>
                  </li>
                  <li data-aos="fade-left">
                    <b> Automating repetitive tasks: </b>
                    Freeing up employees for more creative and strategic work.{" "}
                  </li>
                  <li data-aos="fade-left">
                    <b> Improving data accuracy: </b> Minimizing human errors in data entry and manipulation.
                  </li>
                  <li data-aos="fade-left">
                    <b> 24/7 processing: </b>Performing tasks continuously, improving efficiency and productivity.
                  </li>
                  <li data-aos="fade-left">
                    <b> Enhance compliance: </b>Automating reporting and record-keeping processes.
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
              <h4 className="why_line" data-aos="fade-right">Key Applications of RPA in Pharma:</h4>
              <div className="content_container">
                <ul>
                  <li data-aos="fade-right">
                    <b>Clinical trials: </b> Automating data entry and management for faster approvals.
                  </li>
                  <li data-aos="fade-right">
                    <b> Regulatory compliance: </b> Streamlining reporting and adherence to GxP regulations.
                  </li>
                  <li data-aos="fade-right">
                    <b> Supply chain management: </b>Optimizing order processing and inventory management.
                  </li>
                  <li data-aos="fade-right">
                    <b>Finance and accounting: </b>Automating invoice processing and financial reporting.
                  </li>
                  <li data-aos="fade-right">
                    <b> Customer service: </b> Handling routine inquiries and requests efficiently.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-left">
                <img className="img-fluid" src="/IMG20.jpg" />
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
                <img className="img-fluid" src="/IMG22.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="why_line" data-aos="fade-left">Benefits of RPA:</h4>
              <div className="content_container">
                <ul>
                  <li data-aos="fade-left">
                    <b> Reduced costs: </b> Savings through fewer personnel hours and improved process efficiency.
                  </li>
                  <li data-aos="fade-left">
                    <b> Increased accuracy: </b> Minimization of human errors and improved data quality.
                  </li>
                  <li data-aos="fade-left">
                    <b> Improved compliance:</b> Streamlined adherence to regulatory requirements.
                  </li>
                  <li data-aos="fade-left">
                    <b>Faster processing times: </b> Accelerated workflows and quicker turnaround times.
                  </li>
                  <li data-aos="fade-left">
                    <b>Enhanced employee satisfaction: </b> Freeing up employees for more engaging work.
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
              <h4 className="why_line" data-aos="fade-right">Challenges of RPA:</h4>
              <div className="content_container">
                <ul>
                  <li data-aos="fade-right">
                    <b> Initial investment: </b> Cost of software licenses and implementation expertise.
                  </li>
                  <li data-aos="fade-right">
                    <b> Change management: </b> Transitioning employees to an automated environment.
                  </li>
                  <li data-aos="fade-right">
                    <b> Process selection: </b>Identifying suitable candidates for automation.
                  </li>
                  <li data-aos="fade-right">
                    <b> Data security: </b> Ensuring secure access and data integrity.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-left">
                <img className="img-fluid" src="IMG21.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="ps_paragraph_container m-3 ">
        <h5 className="ps_paragraph" data-aos="zoom-in">
          <b>
            Overall, RPA offers significant potential for pharma companies to optimize processes, improve efficiency,
            and enhance compliance. However, careful planning, implementation, and change management are crucial for
            success.
          </b>
        </h5>
      </div>

      <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-right">
                <img className="img-fluid" src="/IMG23.jpg" />
              </div>
            </div>

            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="why_line" data-aos="fade-left">Additional Notes:</h4>
              <div className="content_container">
                <ul>
                  <li data-aos="fade-left">
                    <b>What is it?</b>
                    EDMS are software systems that manage all your electronic documents in one secure, central location. Think of
                    it as a digital filing cabinet on steroids.
                  </li>
                  <li data-aos="fade-left">
                    <b>Why is it essential?</b> Because it brings a potpourri of benefits:
                    <ul>
                      <li> Specific use cases and benefits will vary depending on the company and its processes. </li>
                      <li>Regulatory considerations require careful attention when implementing RPA in pharma. </li>
                      <li> RPA is not a replacement for human employees but rather a tool to augment their capabilities. </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
