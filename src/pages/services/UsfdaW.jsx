import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function UsfdaW() {
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
        <h1 className="heading" data-aos="fade-down">USFDA Warning Letter Management</h1>
      </div>
      <div className="paragraph_container">
        <p className="paragraph" data-aos="fade-down">
          Receiving a USFDA Warning Letter can feel like being hit with a scorching hot kettle. But instead of
          panicking, imagine transforming it into an opportunity for growth and proactive improvement. USFDA Warning
          Letter Management is your recipe for turning a potential crisis into a catalyst for a stronger, more compliant
          pharma business.
        </p>
      </div>

      <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-right">
                <img className="img-fluid" src="/IMG12.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="why_line" data-aos="fade-left">The Warning Letter Management Potion:</h4>
              <div className="content_container">
                <ul>
                  <li data-aos="fade-left">
                    <b>What is it ? </b>
                    It's a systematic approach to responding to, addressing, and preventing future USFDA Warning Letters. Think
                    of it as a multi-step process to understand the issues, implement corrective actions, and demonstrate
                    sustained compliance.
                  </li>
                  <li data-aos="fade-left">
                    <b>Why is it essential ? </b> Because it offers a powerful blend of benefits:
                  </li>
                  <li data-aos="fade-left">
                    <b>Compliance clarity:</b> Gain a clear understanding of the violations cited in the letter and their
                    potential impact.
                  </li>
                  <li data-aos="fade-left">
                    <b>Prompt response:</b>
                    Develop a comprehensive and timely response plan that addresses the FDA's concerns head-on.{" "}
                  </li>
                  <li data-aos="fade-left">
                    <b>Corrective action magic:</b>
                    Implement effective and sustainable corrective actions (CAPAs) to prevent similar issues from arising
                    again.
                  </li>
                  <li data-aos="fade-left">
                    <b>Preventative measures:</b>
                    Identify and address systemic root causes to prevent future violations and build a culture of
                    compliance.{" "}
                  </li>
                  <li data-aos="fade-left">
                    <b>Proactive communication: </b> Maintain open and transparent communication with the FDA throughout the
                    process, demonstrating your commitment to improvement.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="middle_line_container">
        <h6 className="middle_line" data-aos="zoom-in">
          <b>The bottom line:</b> USFDA Warning Letter Management is not just about fixing immediate issues; it's about
          building a resilient and proactive compliance culture. By brewing a strategic response, you can turn a warning
          letter into a positive force for change, enhancing your compliance posture and demonstrating your commitment
          to patient safety and product quality.
        </h6>
      </div>

      <div className="ps_paragraph_container">
        <h5 className="ps_paragraph" data-aos="zoom-in">
          <b> P.S.</b>Curious about specific steps in the response process, best practices for CAPA implementation, or
          the benefits for different areas of your pharma business? I'm your warning letter management guru – Just
          Schedule a demo!
        </h5>
      </div>

      <div className="bottom_line_container">
        <h5 className="bottom_line" data-aos="zoom-in">Ready to transform your next warning letter into a success story?</h5>
      </div>
    </div>
  );
}
