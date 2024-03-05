import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MES() {
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
        <h1>MES</h1>
      </div>
      <div className="paragraph_container" data-aos="fade-down">
        <p>
          Manufacturing in the pharma industry is a complex dance of ingredients, processes, and regulations. To ensure
          everything runs smoothly and according to plan, you need a maestro – and that's where Manufacturing Execution
          Systems (MES) come in. Think of MES as the digital conductor that orchestrates your entire production process,
          from scheduling and recipe management to quality control and data analysis.
        </p>
      </div>

      <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-right">
                <img className="img-fluid" src="/IMG3.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="why_line">Here's how MES helps your pharma biz brew up success:</h4>
              <div className="content_container">
                <ul>
                  <li data-aos="fade-left">
                    <b>Improved efficiency:</b>
                    MES streamlines workflows, reduces manual tasks, and optimizes resource allocation, leading to increased
                    production output and reduced costs.
                  </li>
                  <li data-aos="fade-left">
                    <b>Enhanced quality control:</b>: Real-time data collection and process monitoring enable early detection of
                    deviations, ensuring consistent product quality and regulatory compliance.
                  </li>
                  <li data-aos="fade-left">
                    <b>Increased traceability:</b>
                    Track every step of your production process, from raw materials to finished product, for seamless recall
                    management and improved transparency.
                  </li>
                  <li data-aos="fade-left">
                    <b>Data-driven decision making:</b>
                    Gain valuable insights from real-time and historical production data to make informed decisions about process
                    optimization, resource allocation, and overall business strategy.
                  </li>
                  <li data-aos="fade-left">
                    <b>Standardized operations:</b>
                    Implement consistent procedures and best practices across your manufacturing facilities, ensuring uniform
                    product quality and reduced risk of errors.
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
          MES is not just software; it's a strategic investment in the efficiency, quality, and compliance of your pharma
          manufacturing operations. By orchestrating your production process with MES, you can brew up a more efficient,
          competitive, and successful business.
        </h6>
      </div>

      <div className="ps_paragraph_container">
        <h5 className="ps_paragraph" data-aos="zoom-in">
          <b> P.S.</b>
          Curious about the different LMS options available, their specific benefits for various pharma roles, or the
          implementation process? I'm your learning guru – Just Schedule a demo!
        </h5>
      </div>

      <div className="bottom_line_container">
        <h5 className='bottom_line' data-aos="zoom-in">Ready to start conducting your pharma symphony?</h5>
      </div>
    </div>
  );
}
