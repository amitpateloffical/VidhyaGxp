import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LMS() {
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
        <h1>LMS</h1>
      </div>
      <div className="paragraph_container" data-aos="fade-down">
        <p>
          In the fast-paced world of pharma, keeping your workforce equipped with the latest knowledge is critical. That's
          where Learning Management Systems (LMS) step in, acting as your digital training hub. Imagine a platform that
          centralizes all your training materials, delivers them effectively, and tracks progress seamlessly. Sounds
          pretty sweet, right?
        </p>
      </div>

      <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-right">
                <img className="img-fluid" src="/IMG2.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="why_line" data-aos="fade-left">Here's the scoop on LMS in pharma:</h4>
              <div className="content_container">
                <ul>
                  <li data-aos="fade-left">
                    <b>What is it ?</b>
                    An LMS is a software platform that helps you design, deliver, and track employee training. Think of it as a
                    one-stop shop for all your learning and development needs.
                  </li>
                  <li data-aos="fade-left">
                    <b>Why is it essential ? </b>Because it empowers you to:
                  </li>
                  <li data-aos="fade-left">
                    <b>Ensure compliance:</b>
                    Keep your team up-to-date on the latest regulations and industry standards, reducing non-compliance risks.
                  </li>
                  <li data-aos="fade-left">
                    <b> Bridge skill gaps:</b>
                    Identify knowledge deficiencies and provide targeted training to close them, boosting overall performance.
                  </li>
                  <li data-aos="fade-left">
                    <b>Deliver effective training:</b>
                    Utilize diverse formats like e-learning modules, videos, and simulations to engage learners and maximize
                    knowledge retention.
                  </li>
                  <li data-aos="fade-left">
                    <b>Track progress and results: </b>
                    Measure the impact of your training programs and make data-driven decisions to continuously improve.
                  </li>
                  <li data-aos="fade-left">
                    <b>Reduce costs and streamline processes: </b>
                    Eliminate the hassle of manual training administration and save valuable time and resources.
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
          LMS is no longer just a "nice-to-have" but a strategic investment for any pharma company serious about
          developing a highly skilled and compliant workforce. It's the key to brewing up a culture of continuous learning
          and ensuring your organization stays ahead of the curve.
        </h6>
      </div>

      <div className="ps_paragraph_container">
        <h5 className="ps_paragraph" data-aos="zoom-in">
          <b> P.S.</b>
          Curious about the different LMS options available, their specific benefits for various pharma roles, or the
          implementation process? I'm your learning guru – Just Schedule a demo!
        </h5>
      </div>
    </div >
  );
}
