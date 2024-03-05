import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MergerAndAcquisition() {
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
    <div className="top_container m-5">
      <div className="service_headingr">
        <h1 className="heading" data-aos="fade-down">Merger & Acquisition</h1>
      </div>
      <div className="paragraph_container">
        <p className="paragraph" data-aos="fade-down">
          In the ever-churning world of pharma, mergers and acquisitions (M&A) are a strategic dance designed to brew up
          market dominance, innovation powerhouses, and diversified portfolios. But like any potent concoction, it
          requires careful planning and execution to avoid a bitter aftertaste.
        </p>
      </div>
      <div className="container-fluid section2 py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="abouts" data-aos="fade-right">
                <img className="img-fluid" src="/IMG13.jpg" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h4 className="why_line" data-aos="fade-left">The M&A Elixir:</h4>
              <div className="content_container">
                <ul>
                  <li data-aos="fade-left">
                    <b>What is it?</b> M&A in pharma involves combining two or more companies to create a new entity or expand
                    an existing one. Think of it as blending resources, expertise, and market reach to create a more formidable
                    competitor.
                  </li>
                  <li data-aos="fade-left">
                    <b>Why is it a tempting brew? </b> Because it offers a bouquet of potential benefits:
                  </li>
                  <li data-aos="fade-left">
                    <b>Market expansion: </b> Access new markets and customer segments, boosting revenue and market share.
                  </li>
                  <li data-aos="fade-left">
                    <b> Innovation acceleration:</b>
                    Combine R&D capabilities and pipelines to fuel groundbreaking drug development.{" "}
                  </li>
                  <li data-aos="fade-left">
                    <b> Cost optimization:</b>
                    Eliminate redundancies and leverage economies of scale for enhanced efficiency and profitability.
                  </li>
                  <li data-aos="fade-left">
                    <b>Portfolio diversification:</b>
                    Spread risk across different therapeutic areas and products, mitigating dependence on single drugs.{" "}
                  </li>
                  <li data-aos="fade-left">
                    <b>Talent acquisition: </b> Gain access to specialized expertise and a broader talent pool.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="middle_line_container">
        <h6 className="middle_line" data-aos="zoom-in">
          <b>The bottom line:</b>:M&A in pharma can be a powerful tool for growth and innovation, but it's not without
          its risks. Careful due diligence, cultural integration planning, and post-merger management are crucial to
          ensure the deal delivers its promised value.
        </h6>
      </div>
      <div className="ps_paragraph_container">
        <h5 className="ps_paragraph" data-aos="zoom-in">
          <b> P.S.</b>Want to delve deeper into specific M&A trends in the pharma industry, success stories and
          cautionary tales, or the impact on different areas like R&D or commercial operations? I'm your M&A guru –Just
          Schedule a demo!
        </h5>
      </div>
      <div className="bottom_line_container">
        <h5 className="bottom_line" data-aos="zoom-in">Ready to explore the M&A cauldron?</h5>
      </div>
    </div>
  );
}
