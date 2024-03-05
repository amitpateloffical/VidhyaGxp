import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RootcauseAnalysis() {
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
    <div className="top_container m-3">
      <div className="service_headingr" data-aos="fade-down">
        <h1 className="heading">Automated Root Cause Analysis(ARCA)</h1>
      </div>
      <div className="paragraph_container">
        <p className="paragraph" data-aos="fade-down">
          Imagine your pharma production is brewing smoothly, then suddenly, quality issues arise, leaving you scrambling
          to find the culprit. Enter Automated Root Cause Analysis (ARCA), a digital detective that sifts through
          mountains of data to quickly and accurately identify the root cause of your problems. Think of it as a Sherlock
          Holmes for pharma, saving you time, money, and ensuring the continued quality and safety of your potions.
        </p>
      </div>

      <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-right">
                <img className="img-fluid" src="/IMG9.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="why_line" data-aos="fade-left">The ARCA Elixir:</h4>
              <div className="content_container">
                <ul>
                  <li data-aos="fade-left">
                    <b>What is it?</b>
                    ARCA leverages artificial intelligence (AI) and machine learning (ML) to analyze vast amounts of production
                    data, automatically pinpointing the root cause of quality deviations, equipment failures, and other process
                    hiccups.
                  </li>
                  <li data-aos="fade-left">
                    <b>Why is it a magic potion? </b>Because it offers a powerful blend of benefits:
                  </li>
                  <li data-aos="fade-left">
                    <b>Speed up your detective work:</b> Identify root causes faster and more accurately than manual methods,
                    minimizing downtime and product loss.
                  </li>
                  <li data-aos="fade-left">
                    <b>Uncover hidden connections: </b>
                    AI can detect subtle patterns and relationships in data that human analysts might miss, leading to deeper
                    insights.{" "}
                  </li>
                  <li data-aos="fade-left">
                    <b>Boost your quality game:</b>
                    Proactive identification of root causes helps prevent recurring issues, ensuring consistent product
                    quality.{" "}
                  </li>
                  <li data-aos="fade-left">
                    <b>Data-driven decisions:</b>
                    Use ARCA insights to improve processes, optimize production, and make informed decisions based on
                    real-time data.{" "}
                  </li>
                  <li data-aos="fade-left">
                    <b>Compliance magic:</b>
                    Streamline your investigative process, making it easier to comply with regulatory requirements.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="middle_line_container">
        <h6 className="middle_line" data-aos="zoom-in">
          <b>The bottom line:</b>
          ARCA is not just a fancy tool; it's a game-changer for enhancing quality, efficiency, and regulatory compliance
          in the pharma industry. By brewing up an ARCA system, you can unmask the culprits behind your production
          problems, ensuring smooth operations and high-quality potions for everyone.
        </h6>
      </div>

      <div className="ps_paragraph_container">
        <h5 className="ps_paragraph" data-aos="zoom-in">
          <b> P.S.</b>
          Curious about specific ARCA solutions, the data they analyze, or the benefits for different areas like
          manufacturing or quality control? I'm your root cause analysis guru – Just Schedule a demo!
        </h5>
      </div>

      <div className="bottom_line_container">
        <h5 className="bottom_line" data-aos="zoom-in">Ready to unleash the power of ARCA?</h5>
      </div>
    </div>
  );
}
