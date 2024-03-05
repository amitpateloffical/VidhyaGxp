import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./services.css"; // Corrected CSS import

export default function ElogBook() {
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
      <div className=" top_container m-3 ">
        <div className="service_headingr">
          <h1 className="heading" data-aos="fade-down">eLogBook</h1>
        </div>
        <div className="paragraph_container">
          <p className="paragraph" data-aos="fade-down">
            Tired of illegible handwriting, lost logbooks, and the constant fear of ink smudging in the cleanroom? Then
            dive into the e-logbook revolution! This digital wonder is shaking up the pharma industry by transforming how
            you record and track crucial data.
          </p>
        </div>

        <div className="container-fluid section2 py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="abouts" data-aos="fade-right">
                  <img className="img-fluid" src="/IMG1.jpg" />
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <h4 className="why_line" data-aos="fade-left">Imagine this:-</h4>
                <div className="content_container">
                  <ul>
                    <li data-aos="fade-left">
                      <b>No more paper mountains:</b>
                      Ditch the bulky binders and scribbled sheets. e-Logbooks store everything electronically, saving space and
                      making retrieval a breeze.
                    </li>
                    <li data-aos="fade-left">
                      <b>Goodbye, ink smudges:</b>
                      Forget the worry of losing valuable data due to a rogue splash. e-Logbooks capture clear, tamper-proof
                      entries, ensuring data integrity.
                    </li>
                    <li data-aos="fade-left">
                      <b> Compliance made easy:</b>
                      Regulatory audits become a stress-free zone. Find any record instantly, demonstrate traceability
                      effortlessly, and stay ahead of compliance requirements.
                    </li>
                    <li data-aos="fade-left">
                      <b> Collaboration gets a boost: </b>
                      Share data seamlessly across teams and departments. Real-time updates keep everyone on the same page,
                      boosting efficiency and communication.
                    </li>
                    <li data-aos="fade-left">
                      <b> Data analysis on steroids:</b>
                      Gone are the days of manually sifting through logbooks. e-Logbooks allow for powerful data analysis, helping
                      you identify trends, improve processes, and optimize production like never before.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="middle_line_container">
          <h6 className="middle_line" data-aos="zoom-in">
            <b>The bottom line:</b> e-Logbooks aren't just about going digital; they're about unlocking a new level of data
            management, collaboration, and efficiency in the pharma industry. So, ditch the pen and paper and embrace the
            future of record-keeping. It's time to brew up a more efficient, compliant, and data-driven future for your
            pharma operations!
          </h6>
        </div>

        <div className="ps_paragraph_container">
          <h5 className="ps_paragraph" data-aos="zoom-in">
            <b> P.S.</b> Want to know more about the different e-Logbook options, their specific benefits for areas like R&D or
            manufacturing, and the implementation process? I'm your brewing buddy – Just Schedule a demo!
          </h5>
        </div>
      </div>
    </>
  );
}
