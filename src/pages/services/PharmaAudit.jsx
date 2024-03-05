
import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PharmaAudit() {
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
        <h1 className="heading" data-aos="fade-down">Pharma Audit & Remediation</h1>
      </div>
      <div className="paragraph_container">
        <p className="paragraph" data-aos="fade-down">
          Let's face it, pharma audits can feel like a bitter pill to swallow. But what if you could transform them into
          an opportunity to brew trust, compliance, and even improvement? That's the power of Pharma Audit & Remediation.
          Imagine facing audits with confidence and clarity, knowing you've got the tools to address any findings and
          emerge stronger.
        </p>
      </div>

      <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-right">
                <img className="img-fluid" src="/IMG8.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="why_line" data-aos="fade-left">The Audit & Remediation Blend:</h4>
              <div className="content_container">
                <ul>
                  <li data-aos="fade-left">
                    <b>What is it?</b>
                    Pharma Audit & Remediation involves preparing for, undergoing, and responding to regulatory inspections. It's
                    like a multi-step process to ensure your manufacturing, clinical trials, and other operations meet the highest
                    standards.
                  </li>
                  <li data-aos="fade-left">
                    <b>Why is it essential?</b> Because it offers a potent mix of benefits:
                  </li>
                  <li data-aos="fade-left">
                    <b>Compliance peace of mind: </b>
                    Reduce the risk of enforcement actions and costly disruptions by proactively addressing potential issues.{" "}
                  </li>
                  <li data-aos="fade-left">
                    <b>Audit readiness magic:</b>
                    Develop a robust audit management system with clear procedures and documentation for a smooth inspection
                    experience.
                  </li>
                  <li data-aos="fade-left">
                    <b>Cost optimization:</b>
                    Prevent problems early on, reducing rework, waste, and recalls, leading to cost savings.{" "}
                  </li>
                  <li data-aos="fade-left">
                    <b>Remediation with a bite:</b>
                    Implement effective corrective and preventive actions (CAPAs) to address findings, ensuring lasting
                    improvements.
                  </li>
                  <li data-aos="fade-left">
                    <b>Continuous learning catalyst:</b>: Use audit findings as a springboard for process optimization and
                    enhanced quality control.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="middle_line_container">
        <h6 className="middle_line" data-aos="zoom-in">
          <b>The bottom line:</b>: Pharma Audit & Remediation is not just about passing inspections; it's about building a
          culture of quality and continuous improvement. By brewing a proactive approach, you can turn audits into
          opportunities for growth, trust, and a stronger, more compliant organization.
        </h6>
      </div>

      <div className="ps_paragraph_container">
        <h5 className="ps_paragraph" data-aos="zoom-in">
          <b> P.S.</b>
          Want to know more about specific audit types, best practices for preparation and remediation, or the benefits
          for different areas of your pharma business? I'm your audit & remediation guru – Just Schedule a demo!
        </h5>
      </div>

      <div className="bottom_line_container">
        <h5 className="bottom_line" data-aos="zoom-in">Ready to sip from the audit & remediation success cup?</h5>
      </div>
    </div>
  );
}
