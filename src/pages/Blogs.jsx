import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1400 });

    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1001/admin/blog-list"
        );
        const fetchedBlogs = response.data.data;
        setBlogs(fetchedBlogs);

        if (fetchedBlogs.length > 0) {
          setSelectedBlog(fetchedBlogs[0]);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const toggleDescription = () => {
    setShowFullDescription((prevState) => !prevState);
  };

  return (
    <div className="blog-page">
      <BreadCrumb page="Our Blogs" />
      <div className="container py-5 bg-white">
        <div className="row g-4">
          {/* Left: Display Selected Blog */}
          <div className="col-lg-8">
            {selectedBlog ? (
              <div className="selected-blog" data-aos="fade-right">
                <h2 className="text-primary">{selectedBlog.title}</h2>
                <img
                  src={selectedBlog.banner_photo}
                  alt={selectedBlog.title}
                  className="img-fluid rounded shadow-sm mb-3"
                  style={{ width: 850, height: 270 }}
                />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p className="text-muted mx-2">
                    Posted on:{" "}
                    {new Date(selectedBlog.createdAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "2-digit",
                        })}
                  </p>
                  <p className="text-muted mx-3">Posted by: Rupesh Patil</p>
                </div>

                {/* Display description based on toggle */}
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: showFullDescription
                        ? selectedBlog.description
                        : selectedBlog.description.slice(0, 250) + "...",
                    }}
                  ></div>

                  <button
                    className="btn btn-outline-primary btn-sm mt-2"
                    onClick={toggleDescription}
                  >
                    {showFullDescription ? "Read Less" : "Read More..."}
                  </button>
                </div>
              </div>
            ) : (
              <p
                className="text-muted text-center"
                style={{ display: "block", position: "relative", right: "0px" }}
              >
                No blog selected or available.
              </p>
            )}
          </div>

          {/* Right: Blog List */}
          <div className="col-lg-4">
            <div className="blog-list" data-aos="fade-left">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className={`card mb-3 shadow-sm border-0 rounded-0 ${
                    selectedBlog?.id === blog.id
                      ? "border-start border-primary border-4"
                      : ""
                  }`}
                >
                  <div
                    className="card-body py-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedBlog(blog)}
                  >
                    <h5 className="card-title text-primary">
                      {blog.title.slice(0, 37)}...
                    </h5>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "10px",
                      }}
                    >
                      <p className="card-text text-muted small m-0">
                        Posted on:{" "}
                        {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "2-digit",
                        })}
                      </p>

                      <p className="card-text text-muted small">
                        Posted by: Rupesh Patil
                      </p>
                    </div>
                    <style>
                      {`
          .selected {
            background-color: #007bff;
            color: white;
            border-color: #007bff;
          }
        `}
                    </style>
                    <button
                      className={`btn btn-outline-primary btn-sm view-button mt-2 ${
                        selectedBlog?.id === blog.id ? "selected" : ""
                      }`}
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
