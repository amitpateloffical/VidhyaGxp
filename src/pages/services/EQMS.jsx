import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function EQMS() {
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
      <div className="top_container m-3">
        <div className="service_headingr" data-aos="fade-down">
          <h1>EQMS</h1>
        </div>
        <div className="paragraph_container">
          <p className="paragraph" data-aos="fade-down">
            In the pharma industry, ensuring the highest quality standards is not just a responsibility, it's a recipe for
            success. That's where Enterprise Quality Management Systems (EQMS) come in, acting as the digital backbone for
            all your quality processes. Imagine a unified platform that streamlines compliance, manages documents, and
            empowers your team to brew up consistently excellent products.
          </p>
        </div>

        <div className="container-fluid section2 py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="abouts" data-aos="fade-right">
                  <img className="img-fluid" src="/IMG5.jpg" />
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <h4 className="why_line" data-aos="fade-left">The EQMS elixir:</h4>
                <div className="content_container">

                  <ul>
                      <li data-aos="fade-left">
                        <b>What is it?</b>
                        An EQMS is a software system that centralizes and manages all your quality-related activities. Think of it as
                        a digital quality control lab that's always open and accessible.
                      </li>
                      <li data-aos="fade-left">
                        <b>Why is it the secret ingredient?</b> Because it offers a powerful blend of benefits:
                      </li>
                      <li data-aos="fade-left">
                        <b>Compliance champion:</b>
                        Ensures adherence to regulatory requirements like cGMP and QMS, reducing risks and simplifying audits.
                      </li>
                      <li data-aos="fade-left">
                        <b>Document management mastery:</b>
                        Store, track, and manage all your quality documentation in one secure, centralized location.
                      </li>
                      <li data-aos="fade-left">
                        <b>Non-conformance control:</b>
                        Identify, track, and resolve deviations and complaints efficiently, minimizing their impact.
                      </li>
                      <li data-aos="fade-left">
                        <b>Risk management magic: </b>
                        Proactively identify and mitigate quality risks before they become problems.{" "}
                      </li>
                      <li data-aos="fade-left">
                        <b>Continuous improvement catalyst: </b> Analyze quality data to identify trends and opportunities for
                        improvement..
                      </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div >

      <div className="middle_line_container">
        <h6 className="middle_line" data-aos="zoom-in">
          <b>The bottom line:</b>
          EQMS is not just software; it's a cultural shift towards a proactive and data-driven approach to quality. By
          brewing up a robust quality management system, you ensure product quality, reduce compliance risks, and build
          trust with regulators and customers.
        </h6>

        <h6 className="middle_line" data-aos="zoom-in">
          <b>Ready to concoct your quality magic?</b>
        </h6>
      </div>

      <div className="ps_paragraph_container  ">
        <h5 className="ps_paragraph" data-aos="zoom-in">
          <b> P.S.</b>
          Want to know more about specific EQMS solutions, their implementation process, and the benefits for
          different areas like manufacturing or clinical trials? I'm your quality guru – Just Schedule a demo!
        </h5>
      </div>
      {/* <h5 className="bottom_line">Ready to start conducting your pharma symphony?</h5> */}
    </div >
    </>
  );
}
