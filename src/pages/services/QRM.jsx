import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function QMS() {
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
      <div className="service_headigr">
        <h1 className="heading">Quality Risk Management (QRM)</h1>
      </div>
      <div className="paragraph_container">
        <p className="paragraph">
          Imagine a world where risks don't lurk in the shadows of your pharma production, but are identified, assessed,
          and mitigated before they can spoil your precious brews. That's the power of Quality Risk Management (QRM) in
          the pharma industry. It's like a protective shield, ensuring the safety, efficacy, and quality of your
          medications every step of the way.
        </p>
      </div>

      <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-right">
                <img className="img-fluid" src="/IMG7.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="why_line" data-aos="fade-left">The QRM magic potion:</h4>
              <div className="content_container">
                <ul>
                  <li data-aos="fade-left">
                    <b>What is it?</b>
                    QRM is a systematic approach to proactively identifying, assessing, and controlling risks throughout the
                    lifecycle of your pharmaceutical products. Think of it as a risk-hunting expedition with the goal of
                    preventing problems before they arise.
                  </li>
                  <li data-aos="fade-left">
                    <b>Why is it essential?</b> Because it offers a potent blend of benefits:
                  </li>
                  <li data-aos="fade-left">
                    <b>Patient safety first:</b>
                    Minimize the risk of adverse reactions and product recalls, safeguarding patient well-being.
                  </li>
                  <li data-aos="fade-left">
                    <b>Compliance confidence:</b>
                    Demonstrate proactive risk management to regulatory authorities, ensuring smooth audits and approvals.{" "}
                  </li>
                  <li data-aos="fade-left">
                    <b>Cost optimization:</b>
                    Prevent problems early on, reducing rework, waste, and recalls, leading to cost savings.{" "}
                  </li>
                  <li data-aos="fade-left">
                    <b>Continuous improvement:</b>
                    Identify recurring risks and implement preventive measures for a better tomorrow.{" "}
                  </li>
                  <li data-aos="fade-left">
                    <b>Data-driven decisions:</b>
                    Use risk data to prioritize resources and make informed decisions about processes and controls.{" "}
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
          QRM is not just a regulatory requirement; it's a strategic investment in the safety, quality, and efficiency of
          your pharma operations. By brewing up a robust QRM system, you can protect patients, comply with regulations,
          save costs, and continuously improve your processes.
        </h6>
      </div>

      <div className="ps_paragraph_container">
        <h5 className="ps_paragraph" data-aos="zoom-in">
          <b> P.S.</b>
          Curious about specific QRM methodologies, their implementation process, or the benefits for different
          stages of the product lifecycle? I'm your risk management guru - Just Schedule a demo!
        </h5>
      </div>
      <div className="bottom_line_container">
        <h5 className="bottom_line" data-aos="zoom-in">Ready to safeguard your pharma potions?</h5>
      </div>
    </div>
  );
}
