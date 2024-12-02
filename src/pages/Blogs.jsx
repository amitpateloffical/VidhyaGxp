import React, { useEffect, useRef } from "react";
import BreadCrumb from "../components/BreadCrumb";
import AOS from "aos";
function Blogs() {
  const listRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 1400 });
    // AOS.refresh();
  }, []);

  useEffect(() => {
    if (listRefs.current) {
      ("");
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
    <div className="blog-page">
      <BreadCrumb page="Blog: Challenges of Paper-Based Systems" />
      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Image Section */}
            <div className="col-lg-6">
              <div className="image-container" data-aos="fade-right">
                <img
                  className="img-fluid rounded shadow"
                  src="/Doctor.jpeg"
                  alt="Challenges Illustration"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="col-lg-6">
              <h2 className="mb-4 text-primary" data-aos="fade-left">
                Challenges of Paper-Based Systems
              </h2>
              <p className="lead text-muted mb-4" data-aos="fade-left">
                Paper-based systems have been a staple in many organizations for
                decades, but they come with a host of challenges that hinder
                efficiency and innovation. Here are the key issues:
              </p>
              <ul className="list-group list-unstyled">
                <li className="mb-3" data-aos="fade-left">
                  <strong>Inefficiency and Errors:</strong> Manual processes are
                  time-consuming, prone to human error, and lack real-time
                  visibility.
                </li>
                <li className="mb-3" data-aos="fade-left">
                  <strong>Compliance Complexity:</strong> Managing paper trails
                  for documentation and regulations is cumbersome and
                  error-prone, increasing compliance risks.
                </li>
                <li className="mb-3" data-aos="fade-left">
                  <strong>Data Silos and Limited Insights:</strong> Information
                  scattered across paper documents hinders data analysis and
                  informed decision-making.
                </li>
                <li className="mb-3" data-aos="fade-left">
                  <strong>Collaboration Bottlenecks:</strong> Paper-based
                  workflows impede collaboration across departments and hinder
                  agility.
                </li>
                <li className="mb-3" data-aos="fade-left">
                  <strong>Scalability Issues:</strong> Manual processes struggle
                  to adapt to growth, hindering flexibility and innovation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
