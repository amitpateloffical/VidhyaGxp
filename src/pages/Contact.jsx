import BreadCrumb from "../components/BreadCrumb"
import { useEffect, useRef,} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
    const listRefs = useRef([]);

    useEffect(() => {
      AOS.init({ duration: 1400 });
      // AOS.refresh();
    }, []);
  
    useEffect(() => {
      if (listRefs.current) {""
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

            <BreadCrumb page="Contact Us" />

            {/* <!-- Contact Start --> */}
            <div className="container-fluid section2  py-5">
                <div className="container">
                    <div className="row g-5 align-items-center d-flex">
                        <div className="col-lg-5 wow fadeIn" data-wow-delay="0.2s">
                            <div className="abouts" data-aos="fade-right">
                                <img className="img-fluid" src="/phone.jpeg" />
                            </div>
                        </div>
                        <div className="container-fluid py-5 col-lg-7">
                            <div className="container py-5" data-aos="fade-left">
                                <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ 'max-width': '500px' }}>
                                    <h1 className="mb-4" data-aos="fade-left">If You Have Any Query, Please Contact Us</h1>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-lg-7">
                                        <div className="wow fadeIn" data-wow-delay="0.3s">
                                            <form>
                                                <div className="row g-3">
                                                    <div className="col-md-6">
                                                            <input type="text" className="form-control"  id="contact-form-border" placeholder="Your Name" />
                                                    </div>
                                                    <div className="col-md-6">
                                                            <input type="email" id="contact-form-border" className="form-control" placeholder="Your Email" />
                                                    </div>
                                                    <div className="col-12">
                                                            <input type="text" className="form-control" id="contact-form-border" placeholder="Subject" />
                                                    </div>
                                                    <div className="col-12">
                                                            <textarea className="form-control" placeholder="Leave a message here" id="contact-form-border" style={{ 'height': '100px' }}></textarea>
                                                    </div>
                                                    <div className="col-12">
                                                        <button id="btn-theme" className="btn btn-primary w-100 py-2" type="submit">Send Message</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact
