import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PaperlessM() {
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
      <div className="service_headingr">
        <h1 className="heading" data-aos="fade-down">Paper less microbiology</h1>
      </div>
      <div className="paragraph_container">
        <p className="paragraph" data-aos="fade-down">
          Imagine a microbiology lab in the pharma industry where paper lab notebooks are relics of the past, replaced by
          a sleek, digital revolution. This is the paperless microbiology promise, brewing a future where efficiency, data
          integrity, and compliance reach new heights.
        </p>
      </div>

      <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-right">
                <img className="img-fluid" src="/IMG11.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="why_line" data-aos="fade-left">The Paperless Potion:</h4>
              <div className="content_container">

                <ul>
                  <li data-aos="fade-left">
                    <b>What is it?</b>
                    Paperless microbiology involves digitizing and automating all your microbiological testing processes. Think of
                    it as a digital Petri dish capturing data seamlessly, streamlining workflows, and boosting insights.
                  </li>
                  <li data-aos="fade-left">
                    <b>Why is it the perfect blend?</b> Because it offers a powerful cocktail of benefits:
                    </li>
                    <ul>
                      <li data-aos="fade-left">
                        <b>Efficiency on steroids: </b>: Reduce manual tasks, automate data entry, and complete tests faster,
                        freeing up valuable lab time and resources.{" "}
                      </li>
                      <li data-aos="fade-left">
                        <b>Data integrity magic:</b>
                        Eliminate transcription errors and ensure accurate, tamper-proof records for regulatory compliance.
                      </li>
                      <li data-aos="fade-left">
                        <b>Collaboration boost:</b>
                        Share data instantly with colleagues across departments, fostering better communication and faster
                        decision-making.{" "}
                      </li>
                      <li data-aos="fade-left">
                        <b>Trends and insights galore:</b>
                        Analyze data easily to identify trends, predict risks, and optimize testing protocols.
                      </li>
                      <li data-aos="fade-left">
                        <b>Compliance made easy: </b>Meet regulatory requirements effortlessly with audit-ready digital records
                        and streamlined traceability.
                      </li>
                    </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="middle_line_container">
        <h6 className="middle_line" data-aos="zoom-in">
          <b>The bottom line:</b>: Paperless microbiology is not just a tech upgrade; it's a strategic shift towards a
          modern, data-driven approach to microbiology in pharma. By brewing this digital transformation, you can enhance
          efficiency, ensure data integrity, comply with regulations, and gain valuable insights to optimize your entire
          production process.
        </h6>
      </div>

      <div className="ps_paragraph_container">
        <h5 className="ps_paragraph" data-aos="zoom-in">
          <b> P.S.</b> Still curious about specific paperless solutions, their implementation process, or the benefits for
          different areas like sterility testing or environmental monitoring? I'm your microbiology guru – Just Schedule a
          demo!
        </h5>
      </div>
      <div className="bottom_line_container">
        <h5 className="bottom_line" data-aos="zoom-in">Ready to ditch the paper and embrace the digital revolution?</h5>
      </div>
    </div>
  );
}
