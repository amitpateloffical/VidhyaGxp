import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AiAssistedCultureOfQuality() {
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
      <div className="top_container m-5">
        <div className="service_headingr">
          <h1 className="heading" data-aos="fade-down">AI-Assisted Culture of Quality</h1>
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
                  <img className="img-fluid" src="/IMG15.jpg" />
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <h4 className="why_line" data-aos="fade-left">The AI-Assisted Quality Culture Potion:</h4>
                <div className="content_container">
                  <ul>
                    <li data-aos="fade-left">
                      <b>What is it?</b>
                      It's about integrating Artificial Intelligence into your existing quality management systems, fostering a
                      collaborative environment where data-driven insights guide decision-making and every employee becomes a
                      quality champion.
                    </li>
                    <li>
                      <ul>
                        <li data-aos="fade-left">
                          <b>Why is it the ultimate quality booster?</b>Because it offers a potent blend of benefits:
                        </li>
                        <li data-aos="fade-left">
                          <b>Predictive Quality Control: </b> AI analyzes vast datasets to identify potential quality risks
                          before they occur, enabling proactive interventions and prevention.
                        </li>
                        <li data-aos="fade-left">
                          <b> Continuous Improvement Catalyst:</b>
                          AI helps analyze quality data to uncover patterns and trends, pinpointing areas for improvement and
                          optimizing processes continuously.
                        </li>
                        <li data-aos="fade-left">
                          <b> Risk Management with Bite:</b>
                          AI algorithms can predict and assess potential quality risks, allowing for data-driven risk mitigation
                          strategies.{" "}
                        </li>
                        <li data-aos="fade-left">
                          <b>Empowered Workforce: </b>
                          AI provides real-time insights and recommendations to your team, empowering them to make informed
                          quality decisions.
                        </li>
                        <li data-aos="fade-left">
                          <b>Culture Shift Champion:</b> AI fosters a data-driven approach to quality, promoting transparency,
                          accountability, and a shared commitment to excellence.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="middle_line_container">
          <h6 className="middle_line" data-aos="zoom-in">
            <b>The bottom line:</b>AI-Assisted Culture of Quality is not just about technology; it's about transforming
            your organization's mindset and approach to quality. By brewing intelligence into your quality systems, you
            can create a culture of continuous improvement, innovation, and unparalleled quality that sets your pharma
            business apart.
          </h6>
        </div>

        <div className="ps_paragraph_container">
          <h5 className="ps_paragraph" data-aos="zoom-in">
            <b> P.S.</b>P.S. Want to know more about specific AI applications in pharma, the challenges and ethical
            considerations, or the impact on different areas like R&D or supply chain? I'm your AI-powered guru –Just
            Schedule a demo!
          </h5>
        </div>

        <div className="bottom_line_container">
          <h5 className="bottom_line" data-aos="zoom-in">Ready to start your AI-powered quality journey?</h5>
        </div>
      </div>
    </>
  );
}
