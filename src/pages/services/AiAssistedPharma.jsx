import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AiAssistedPharma() {
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
      <div className="heading_container">
        <h1 className="heading" data-aos="fade-down">AI-Assisted Pharma 4.0</h1>
      </div>

      <div className="paragraph_container">
        <p className="paragraph" data-aos="fade-down">
          Imagine your pharma manufacturing humming with the intelligence of AI, optimizing processes, predicting
          problems, and brewing higher quality, more affordable medicines. That's the magic of AI-Assisted Pharma 4.0, a
          revolution transforming the industry with data-driven insights and automation.
        </p>
      </div>

      <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-right">
                <img className="img-fluid" src="/IMG16.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="why_line" data-aos="fade-left">The AI-Assisted Pharma 4.0 Elixir:</h4>
              <div className="content_container">
                <ul>
                  <li data-aos="fade-left">
                    <b>What is it?</b>
                    It's the convergence of Pharma 4.0 principles (digitization, connectivity, automation) with Artificial
                    Intelligence. Think of it as a smart factory powered by machine learning and algorithms, learning from vast
                    data sets to make smarter decisions.
                  </li>
                  <li>
                    <b>Why is it the secret ingredient? </b>Because it offers a powerful blend of benefits:
                    <ul>
                      <li data-aos="fade-left">
                        <b>Optimized processes:</b> AI analyzes data in real-time, predicting and preventing deviations, leading
                        to smoother production and reduced waste.
                      </li>
                      <li data-aos="fade-left">
                        <b> Quality control boost:</b>
                        AI algorithms can detect subtle anomalies in product data, catching quality issues early on, ensuring
                        safety and efficacy.{" "}
                      </li>
                      <li data-aos="fade-left">
                        <b> Drug discovery acceleration:</b>
                        AI can analyze massive datasets, identifying promising drug candidates faster and with higher accuracy.{" "}
                      </li>
                      <li data-aos="fade-left">
                        <b>Personalized medicine: </b>
                        AI can analyze patient data to develop more targeted and effective treatments, ushering in an era of
                        precision medicine.{" "}
                      </li>
                      <li data-aos="fade-left">
                        <b>Predictive maintenance: </b> AI can predict equipment failures, minimizing downtime and maximizing
                        production efficiency.
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
          <b>The bottom line:</b> AI-Assisted Pharma 4.0 is not just a technology trend; it's a strategic shift towards
          smarter, faster, and more efficient drug development and manufacturing. By infusing your operations with AI,
          you can brew up a stronger, more competitive, and patient-centric future for your pharma business.
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
        <h5 className="bottom_line" data-aos="zoom-in">Ready to start your AI-powered brewing journey?</h5>
      </div>
    </div>
  );
}
