import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GxpSystems() {
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
      <div className="top_container m-5">
        <div className="service_headingr">
          <h1 className="heading" data-aos="fade-down">Connected & Integrated GXP Systems</h1>
        </div>
        <div className="paragraph_container">
          <p className="paragraph" data-aos="fade-down">
            Imagine your pharma manufacturing humming with seamless data flow between various GXP systems, creating a
            symphony of interconnected efficiency. Ditch the data silos and manual integrations, and brew up a future
            where compliance is effortless, insights are instant, and decision-making is data-driven. That's the magic
            of connected and integrated GXP systems. Imagine your pharma manufacturing humming with seamless data flow
            between various GXP systems, creating a symphony of interconnected efficiency. Ditch the data silos and
            manual integrations, and brew up a future where compliance is effortless, insights are instant, and
            decision-making is data-driven. That's the magic of connected and integrated GXP systems.
          </p>
        </div>

        <div className="container-fluid section2 py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="abouts" data-aos="fade-right">
                  <img className="img-fluid" src="/IMG15.jpg" />
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <h4 className="why_line" data-aos="fade-left">The Connected & Integrated GXP Systems Elixir:</h4>
                <div className="content_container">
                  <ul>
                    <li data-aos="fade-left">
                      <b>What is it?</b>
                      It's about breaking down data walls between your GxP systems, like LIMS, MES, QMS, and DMS, enabling them
                      to communicate and share data seamlessly. Think of it as an orchestrated flow of information that fuels
                      efficient operations and regulatory compliance.
                    </li>
                    <li data-aos="fade-left">
                      <b>Why is it the key to success? </b>Because it offers a powerful blend of benefits:
                      <ul>
                        <li data-aos="fade-left">
                          <b> Compliance made easy:</b>
                          Effortlessly track data provenance across systems, ensuring audit-ready trails and simplified
                          compliance demonstrations.
                        </li>
                        <li data-aos="fade-left">
                          <b>Efficiency boost: </b> Automate manual data transfer tasks, freeing up valuable time and resources
                          for your team.
                        </li>
                        <li data-aos="fade-left">
                          <b> Real-time insights: </b>
                          Gain a holistic view of your operations by analyzing data from all interconnected systems, enabling
                          faster and more informed decision-making.
                        </li>
                        <li data-aos="fade-left">
                          <b>Risk management magic: </b>
                          Proactively identify potential issues by correlating data across systems, leading to reduced risks and
                          improved product quality.
                        </li>
                        <li data-aos="fade-left">
                          <b>Continuous improvement:</b> Analyze data from all stages of the manufacturing process to pinpoint
                          areas for improvement, leading to optimized processes and enhanced efficiency.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="middle_line_container">
          <h6 className="middle_line" data-aos="zoom-in">
            <b>The bottom line:</b>Connected & integrated GXP systems are not just a technological upgrade; they're a
            strategic investment in the future of your pharma manufacturing. By brewing up a seamless data flow, you can
            create a more efficient, compliant, and data-driven operation that ensures consistent quality and regulatory
            peace of mind.
          </h6>
        </div>

        <div className="ps_paragraph_container">
          <h5 className="ps_paragraph" data-aos="zoom-in">
            <b> P.S.</b> Want to know more about specific integration solutions, the challenges and benefits of
            implementation, or the impact on different areas like production or quality control? I'm your GXP
            integration – Just Schedule a demo!
          </h5>
        </div>

        <div className="bottom_line_container">
          <h5 className="bottom_line" data-aos="zoom-in">Ready to start your connected & integrated journey?</h5>
        </div>
      </div>

    </>
  );
}
