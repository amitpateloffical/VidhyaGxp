import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Industries() {
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
            {/* <!-- About Start --> */}
            <div className="container-fluid section2  py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="abouts" data-aos="fade-right">
                                <img className="img-fluid" src="/lab.jpg" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h3 className="mb-4" data-aos="fade-left">Industry Expertise at LifeLink Digital</h3>
                            <p className="mb-4" data-aos="fade-left">
                                At LifeLink Digital, we understand the unique challenges and opportunities faced by the global pharmaceutical industry. We are a dedicated GxP software provider with a deep understanding of industry regulations, workflows, and best practices.
                            </p>
                            <div className="mb-4" data-aos="fade-left"><b>Our industry expertise extends across various GxP domains, including:</b>
                            </div>
                            <div className="content_container">
                                <ul className="list-group"
                                    ref={(ref) => listRefs.current.push(ref)}
                                >
                                    <li className="list-group-item" data-aos="fade-left">
                                        <b>Good Manufacturing Practice (GMP):</b>
                                        We offer software solutions that ensure compliance with GMP regulations and support efficient manufacturing processes.
                                    </li>
                                    <li className="list-group-item" data-aos="fade-left">
                                        <b>Good Laboratory Practice (GLP):</b>Our solutions facilitate data integrity, traceability, and quality control in laboratory environments.
                                    </li>
                                    <li className="list-group-item" data-aos="fade-left">
                                        <b>Good Clinical Practice (GCP):</b> We provide tools for managing clinical trials, streamlining data collection, and ensuring regulatory compliance.
                                    </li>
                                    <li className="list-group-item" data-aos="fade-left">
                                        <b>Pharmacovigilance (PV): </b>Our software helps you efficiently track and report adverse events, ensuring patient safety and regulatory adherence.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -----------2nd Part----------- */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h3 className="mb-4" data-aos="fade-right"> Here`s how our industry knowledge benefits your organization:</h3>
                            <div className="content_container">
                                <ul className="list-group"
                                    ref={(ref) => listRefs.current.push(ref)}
                                >
                                    <li className="list-group-item" data-aos="fade-right">
                                        <b>Tailored solutions:</b>
                                        : We understand your specific needs and develop software that seamlessly integrates with your existing processes and workflows.
                                    </li>
                                    <li className="list-group-item" data-aos="fade-right">
                                        <b>Compliance assurance</b>: Our solutions are designed to meet the highest regulatory standards, helping you achieve and maintain compliance effortlessly.
                                    </li>
                                    <li className="list-group-item" data-aos="fade-right">
                                        <b>Improved efficiency</b> : We streamline your operations and optimize data management, saving you time and resources.
                                    </li>
                                    <li className="list-group-item" data-aos="fade-right">
                                        <b>Enhanced collaboration: </b>Our solutions facilitate seamless collaboration between different departments and stakeholders.
                                    </li>
                                    <li className="list-group-item" data-aos="fade-right">
                                        <b>Reduced risk: </b>: We help you mitigate risks associated with non-compliance and data integrity issues.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="abouts" data-aos="fade-left">
                                <img className="img-fluid" src="/Industries.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -----------3rd Part----------- */}
            <div className="card-section container-fluid pt-5 pb-5">
                <div className="container pt-5 pb-5">
                    <div className="row g-5">
                        <div className="ms-3">
                            <h2 className="text-center">Beyond expertise, we offer:</h2>
                        </div>
                        <div className="expertise-cards">
                            <div className="card-expertise" data-aos="fade-right">
                                <div className="img-card">
                                    <img
                                        src="https://cdn3d.iconscout.com/3d/premium/thumb/web-development-5374063-4496032.png?f=webp"
                                        alt=""
                                        className="card-img"
                                    />
                                </div>
                                <div className="card-pera">
                                    <div className="software p-1">Industry-specific resources</div>
                                    <div className="software-pera">
                                        {" "}
                                        We provide white papers, webinars, and case studies to keep you informed about the latest industry trends and regulations.
                                    </div>
                                </div>
                            </div>
                            <div className="card-expertise">
                                <div className="img-card">
                                    <img
                                        src="https://cdn3d.iconscout.com/3d/premium/thumb/web-security-5617614-4674325.png?f=webp"
                                        alt=""
                                        className="card-img"
                                    />
                                </div>
                                <div className="card-pera">
                                    <div className="software">Dedicated support</div>
                                    <div className=" software-pera">
                                        {" "}
                                        Our team of experienced professionals is always available to answer your questions and provide technical assistance.
                                    </div>
                                </div>
                            </div>{" "}
                            <div className="card-expertise" data-aos="fade-left">
                                <div className="img-card">
                                    <img
                                        src="https://cdn3d.iconscout.com/3d/premium/thumb/online-pharmacy-9711183-7909752.png"
                                        alt=""
                                        className="card-img"
                                    />
                                </div>
                                <div className="card-pera">
                                    <div className="software">Ongoing innovation</div>
                                    <div className="software-pera">
                                        {" "}
                                        We continuously invest in research and development to ensure our solutions remain at the forefront of the industry.
                                    </div>
                                </div>
                            </div>{" "}
                        </div>
                        <div className="ms-3">
                            <h4 className="text-center">Partner with LifeLink Digital and leverage our industry expertise to achieve your GxP compliance goals and drive operational excellence.</h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}
        </>
    )
}

export default Industries
