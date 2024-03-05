import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WarehouseMS() {
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
        <h1 className="heading" data-aos="fade-down">Warehouse management system(WMS)</h1>
      </div>
      <div className="paragraph_container">
        <p className="paragraph" data-aos="fade-down">
          In the fast-paced world of pharma, inventory management isn't just about stocking shelves - it's about ensuring
          patient well-being. That's where Warehouse Management Systems (WMS) step in, acting as the magical potion for
          optimizing your pharma warehouse operations. Imagine a system that tracks every pill, vial, and syringe with
          precision, ensuring accurate inventory, streamlined processes, and regulatory compliance.
        </p>
      </div>

      <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-right">
                <img className="img-fluid" src="/IMG10.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="why_line" data-aos="fade-left">The WMS Elixir:</h4>
              <div className="content_container">
                <ul>
                  <li data-aos="fade-left">
                    <b>What is it?</b>
                    EDMS are software systems that manage all your electronic documents in one secure, central location. Think of
                    it as a digital filing cabinet on steroids.
                  </li>
                  <li data-aos="fade-left">
                    <b>Why is it essential?</b> Because it brings a potpourri of benefits:
                  </li>
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="middle_line_container">
        <h6 className="middle_line" data-aos="zoom-in">
          <b>The bottom line:</b>
          WMS is not just software; it's a strategic investment in the efficiency, compliance, and patient safety of your
          pharma supply chain. By brewing up a robust WMS system, you can ensure inventory accuracy, optimize processes,
          and deliver life-saving medications to patients in need.
        </h6>
      </div>

      <div className="ps_paragraph_container">
        <h5 className="ps_paragraph" data-aos="zoom-in">
          <b> P.S.</b>
          Curious about specific WMS solutions, their implementation process, or the benefits for different areas like
          cold chain management or serialized inventory control? I'm your warehouse management guru – Just Schedule a
          demo!
        </h5>
      </div>
      <div className="bottom_line_container">
        <h5 className="bottom_line" data-aos="zoom-in">Ready to unleash the power of WMS in your pharma warehouse?</h5>
      </div>
    </div>
  );
}
