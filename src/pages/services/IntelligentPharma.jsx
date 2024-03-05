import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function IntelligentPharma() {
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
        <h1 className="heading">Intelligent Pharma Manufacturing Factory </h1>
      </div>

      <div className="paragraph_container">
        <p className="paragraph" data-aos="fade-down">
          Imagine a pharma culture where quality isn't just a slogan, it's a living, breathing entity, empowered by
          the magic of AI. Dive into a world where intelligent machines work hand-in-hand with your team, brewing a
          culture of continuous improvement, proactive risk management, and unparalleled quality assurance.
        </p>
      </div>

      <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-right">
                <img className="img-fluid" src="/IMG17.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="why_line">Key Features:</h4>
              <div className="content_container">
                <ul>
                  <li data-aos="fade-left">
                    <b>AI-powered process optimization: </b>
                    AI algorithms analyze real-time data from sensors across the plant, optimizing parameters like temperature,
                    pressure, and mixing ratios for each batch. This ensures consistent quality and minimizes production errors.
                  </li>
                  <li data-aos="fade-left">
                    <b> Predictive maintenance: </b>ML algorithms predict potential equipment failures based on historical data
                    and sensor readings, enabling proactive maintenance and preventing downtime.
                  </li>
                  <li data-aos="fade-left">
                    <b> Digital quality control: </b> AI and computer vision systems inspect drugs for defects with high
                    accuracy and speed, replacing manual inspection and reducing human error.
                  </li>
                  <li data-aos="fade-left">
                    <b> Real-time data visualization: </b>Dashboards and reports present production data in clear and actionable
                    insights, allowing operators to make informed decisions on the fly.
                  </li>
                  <li data-aos="fade-left">
                    <b> Automated material handling: </b>Robots and autonomous guided vehicles (AGVs) handle raw materials and
                    finished products, minimizing manual labor and increasing safety.
                  </li>
                  <li data-aos="fade-left">
                    <b> Enhanced traceability: </b>Blockchain technology tracks every step of the manufacturing process,
                    ensuring product authenticity and facilitating efficient recalls if needed.
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
              <h4 className="why_line mt-5" data-aos="fade-right">Benefits:</h4>
              <div className="content_container">
                <ul>
                  <li data-aos="fade-right">
                    <b>Increased efficiency: </b> AI-powered optimization reduces process times, minimizes waste, and maximizes
                    production output.
                  </li>
                  <li data-aos="fade-right">
                    <b> Improved quality:</b> Automated and AI-driven quality control ensures consistent product quality and
                    minimizes defects.
                  </li>
                  <li data-aos="fade-right">
                    <b> Reduced costs: </b>• Predictive maintenance and optimized processes lead to lower maintenance costs and
                    improved resource utilization.
                  </li>
                  <li data-aos="fade-right">
                    <b>Enhanced safety:</b> Robotics and automation minimize human exposure to hazardous materials and
                    processes.
                  </li>
                  <li data-aos="fade-right">
                    <b> Greater agility:</b> Real-time data and AI-driven insights enable faster response to market changes and
                    production demands.
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
              <h4 className="why_line" data-aos="fade-left">Challenges:</h4>
              <div className="content_container">
                <ul>
                  <li data-aos="fade-left">
                    <b>High initial investment: </b> Implementing AI and other advanced technologies requires significant
                    upfront costs.
                  </li>
                  <li data-aos="fade-left">
                    <b> Regulatory compliance: </b> Integrating AI into pharmaceutical manufacturing must adhere to strict
                    regulatory requirements.
                  </li>
                  <li data-aos="fade-left">
                    <b>Data security and privacy: </b> Protecting sensitive patient data and manufacturing processes is crucial
                  </li>
                  <li data-aos="fade-left">
                    <b>Enhanced safety:</b> Robotics and automation minimize human exposure to hazardous materials and
                    processes.
                  </li>
                  <li data-aos="fade-left">
                    <b> Workforce reskilling:</b> Transitioning to an AI-driven environment may require upskilling or reskilling
                    the workforce.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="ps_paragraph_container mt-5 bg">
        <h5 className="ps_paragraph" data-aos="zoom-in">
          Overall, AI-Assisted Smart Pharma Digital Manufacturing Plants represent the future of the pharmaceutical
          industry. By leveraging AI and other digital technologies, these plants can achieve greater efficiency,
          improved quality, and enhanced safety, ultimately benefiting patients and the healthcare system as a whole.
        </h5>
      </div>

      <div className="ps_paragraph_container mt-5 ">
        <h5 className="ps_paragraph" data-aos="zoom-in">
          <b>
            It's important to note that this is a developing field, and the specific implementations of AI in pharma
            manufacturing will vary depending on the plant and its goals.
          </b>
        </h5>
      </div>
    </div>
  );
}
