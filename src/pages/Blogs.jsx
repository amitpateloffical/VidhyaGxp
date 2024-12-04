import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import AOS from "aos";
import "aos/dist/aos.css";
import pseudoBlogData from "./pseudoBlogData";

function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null); // Track the blog displayed on the left

  useEffect(() => {
    AOS.init({ duration: 1400 });

    // Set the first blog as the default selected blog
    if (pseudoBlogData.length > 0) {
      setSelectedBlog(pseudoBlogData[0]);
    }
  }, []);

  return (
    <div className="blog-page">
      <BreadCrumb page="Our Blogs" />
      <div className="container py-5 bg-light">
        {/* <h1 className="text-center  mb-4" style={{ fontSize: "3rem" ,color: "#007bff !important" ,}}>Our Latest Blogs</h1> */}
        <div className="row g-4">
          {/* Left: Display Selected Blog */}
          <div className="col-lg-8">
            {selectedBlog && (
              <div className="selected-blog" data-aos="fade-right">
                <h2 className="text-primary">{selectedBlog.title}</h2>
                <img
                  src={selectedBlog.imageUrl}
                  alt={selectedBlog.title}
                  className="img-fluid rounded shadow-sm mb-3"
                  style={{ width: 850, height: 250 }}
                />
                <p className="text-muted">Posted on: {selectedBlog.date}</p>
                <div
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                ></div>
              </div>
            )}
          </div>

          {/* Right: Blog List */}
          <div className="col-lg-4">
            <div className="blog-list" data-aos="fade-left">
              {pseudoBlogData.map((blog) => (
                <div
                  key={blog.id}
                  className={`card mb-3 shadow-sm border-0 rounded-0 ${
                    selectedBlog?.id === blog.id
                      ? "border-start border-primary border-4"
                      : ""
                  }`}
                >
                  <div
                    className="card-body py-3 cursor-pointer"
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedBlog(blog)}
                  >
                    <h5 className="card-title text-primary">{blog.title}</h5>
                    <p className="card-text text-muted small">{blog.date}</p>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => setSelectedBlog(blog)}
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
