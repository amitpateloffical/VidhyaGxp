import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function EDMS() {
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
        <h1>EDMS</h1>
      </div>
      <div className="paragraph_container">
        <p className="paragraph" data-aos="fade-down">
          Imagine a world where mountains of paper documents are a thing of the past, replaced by a sleek, digital haven
          of information: that's the magic of Electronic Document Management Systems (EDMS) in the pharma industry. Dive
          into a paperless paradise where finding documents is a breeze, compliance is effortless, and collaboration soars
        </p>
      </div>

      <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-right">
                <img className="img-fluid" src="/IMG4.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="why_line" data-aos="fade-left">The EQMS elixir:</h4>
              <div className="content_container">

                <ul>
                  <li data-aos="fade-left">
                    <b>What is it?</b>
                    EDMS are software systems that manage all your electronic documents in one secure, central location. Think of
                    it as a digital filing cabinet on steroids.
                  </li>
                  <li>
                    <b>Why is it essential?</b> Because it brings a potpourri of benefits:
                    <ul>
                      <li data-aos="fade-left">
                        <b>Compliance magic:</b>
                        Say goodbye to frantic document searches! EDMS ensures easy access, audit-ready trails, and streamlined
                        compliance with regulations like 21 CFR Part 11.
                      </li>
                      <li data-aos="fade-left">
                        <b>Collaboration boost:</b>
                        Share documents seamlessly across teams and departments, fostering better communication and faster
                        decision-making.
                      </li>
                      <li data-aos="fade-left">
                        <b>Version control made easy:</b>
                        No more confusion about "the latest version." EDMS tracks every change, ensuring you're always using the
                        correct document.
                      </li>
                      <li data-aos="fade-left">
                        <b>Security fortress:</b>
                        Protect your sensitive data with robust security features like access controls and encryption.
                      </li>
                      <li data-aos="fade-left">
                        <b>Space-saving superhero:</b>: Ditch the physical clutter and free up valuable workspace for what matters
                        most.
                      </li>
                    </ul>
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
              <h4 className="why_line">The EDMS lowdown:</h4>
              <div className="content_container">
                <ul>
                  <li data-aos="fade-right">
                    <b>What is it?</b>
                    EDMS are software systems that manage all your electronic documents in one secure, central location. Think of
                    it as a digital filing cabinet on steroids.
                  </li>
                  <ul>
                    <li data-aos="fade-right">
                      <b>Why is it essential?</b> Because it brings a potpourri of benefits:
                      </li>
                      <li data-aos="fade-right">
                        <b>Compliance magic:</b>
                        Say goodbye to frantic document searches! EDMS ensures easy access, audit-ready trails, and streamlined
                        compliance with regulations like 21 CFR Part 11.
                      </li>
                      <li data-aos="fade-right">
                        <b>Collaboration boost:</b>
                        Share documents seamlessly across teams and departments, fostering better communication and faster
                        decision-making.
                      </li>
                      <li data-aos="fade-right">
                        <b>Version control made easy:</b>
                        No more confusion about "the latest version." EDMS tracks every change, ensuring you're always using the
                        correct document.
                      </li>
                      <li data-aos="fade-right">
                        <b>Security fortress:</b>
                        Protect your sensitive data with robust security features like access controls and encryption.
                      </li>
                      <li data-aos="fade-right">
                        <b>Space-saving superhero:</b>: Ditch the physical clutter and free up valuable workspace for what matters
                        most.
                      </li>
                  </ul>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-left">
                <img className="img-fluid" src="/IMG6.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="middle_line_container">
        <h6 className="middle_line" data-aos="zoom-in">
          <b>The bottom line:</b>
          EDMS is more than just document storage; it's a strategic tool for boosting efficiency, collaboration, and
          compliance in the pharma industry. It's the key to brewing up a future where information is readily available,
          secure, and empowers your team to work smarter, not harder.
        </h6>
      </div>

      <div className="ps_paragraph_container">
        <h5 className="ps_paragraph" data-aos="zoom-in">
          <b> P.S.</b>
          Curious about specific EDMS solutions, their implementation process, or the benefits for different areas like
          R&D or clinical trials? I'm your document management guru – Just Schedule a demo!
        </h5>
      </div>

      <div className="bottom_line_container">
        <h5 className="bottom_line" data-aos="zoom-in">Ready to start conducting your pharma symphony?</h5>
      </div>
    </div >
  );
}
