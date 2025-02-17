import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const blogsPerPage = 6;

  useEffect(() => {
    AOS.init({ duration: 1400 });

    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://gxp-api.mydemosoftware.com/admin/blog-list"
        );
        const fetchedBlogs = response.data.data;
        setBlogs(fetchedBlogs);

        if (fetchedBlogs.length > 0) {
          setSelectedBlog(fetchedBlogs[0]);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const toggleDescription = () => {
    setShowFullDescription((prevState) => !prevState);
  };

  useEffect(() => {
    setShowFullDescription(false);
  }, [selectedBlog]);

  // Pagination Logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // if (loading) {
  //   return (
  //      <div className={styles["blog-list"]}>
  //         {[1, 2, 3, 4,5,6].map((_, index) => (
  //           <div key={index} className="p-3 border rounded shadow-sm">
  //             <Skeleton height={30} width="80%" className="mb-2" />
  //             <Skeleton height={250} width="100%" className="mb-3" />
  //             <div className="d-flex justify-content-between">
  //               <Skeleton width="30%" />
  //               <Skeleton width="30%" />
  //             </div>
  //             <Skeleton width="100%" count={3} />
      
  //             <div className="d-flex justify-content-between mt-3">
  //               <Skeleton width={100} height={30} />
  //               <div className="d-flex">
  //                 <Skeleton width={70} height={30} className="mx-1" />
  //                 <Skeleton width={70} height={30} />
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //   );
  // }

  return (
    <div className="blog-page">
      <BreadCrumb page="Our Blogs" />
      <div className="container py-5 bg-white">
        <div className="row g-4">
          {/* Left: Display Selected Blog */}
          <div className="col-lg-8">  
            {loading ? (
              // Skeleton for Blog Details
              <div className="selected-blog" data-aos="fade-right">
                <Skeleton height={40} width="60%" />
                <Skeleton height={350} width="100%" className="mb-3" />
                <Skeleton width="40%" />
                <Skeleton width="30%" />
                <Skeleton count={6} />
              </div>
            ) :selectedBlog ? (
              <div className="selected-blog">
                <div data-aos="fade-right">
                <h2 className="text-primary" style={{ fontSize: 28 }}>
                  {selectedBlog.title}
                </h2>
                <img
                  src={selectedBlog.banner_photo}
                  alt={selectedBlog.title}
                  className="img-fluid rounded shadow-sm mb-3"
                  style={{ width: 850, height: 350 }}
                /></div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p className="text-muted mx-2">
                    Posted on:{" "}
                    {new Date(selectedBlog.createdAt).toLocaleDateString(
                      "en-GB",
                      {
                        day: "2-digit",
                        month: "2-digit",
                        year: "2-digit",
                      }
                    )}
                  </p>
                  <p className="text-muted mx-3">Posted by: Admin</p>
                </div>

                {/* Display description based on toggle */}
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: showFullDescription
                        ? selectedBlog.description
                        : selectedBlog.description.slice(0, 1600) + "...",
                    }}
                  ></div>
                  <style>
                    {`.read-more-btn {
display: inline-block;
position: relative;
font-weight: bold;
cursor: pointer;
transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}

.read-more-btn:hover {
transform: translateX(10px);
color: #1d4ed8;
}
`}
                  </style>
                  <button
                    className="btn text-primary btn-sm mt-2 read-more-btn"
                    onClick={toggleDescription}
                    style={{ textAlign: "right" }}
                  >
                    {showFullDescription ? "Read Less" : "...Read More"}
                  </button>
                </div>
              </div>
            ) : (
              <p
                className="text-muted"
                style={{
                  position: "absolute",
                  right: "0px",
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                  whiteSpace: "nowrap",
                  margin: "auto",
                  left: "0px",
                }}
              >
                There was an error to fetching blogs ⚠️
              </p>
            )}
          </div>

          {/* Right: Blog List */}
          <div className="col-lg-4">
            <div className="blog-list" data-aos="fade-left">
              {loading
                ? // Skeleton Loader for Blog List
                  [1, 2, 3].map((_, index) => (
                    <div key={index} className="card mb-3 shadow-sm p-3">
                      <Skeleton height={20} width="80%" className="mb-2" />
                      <Skeleton width="40%" />
                      <Skeleton width="60%" />
                      <Skeleton width={80} height={30} className="mt-2" />
                    </div>
                  ))
                :currentBlogs.map((blog) => (
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
                        Posted by: Admin
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
                      {" "}
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination Controls */}
            <div className="pagination-controls mt-4 text-center">
              {currentPage > 1 && (
                <button
                  className="btn btn-sm btn-outline-primary mx-1"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </button>
              )}
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`btn btn-sm ${
                    currentPage === index + 1
                      ? "btn-primary"
                      : "btn-outline-primary"
                  } mx-1`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              {currentPage < totalPages && (
                <button
                  className="btn btn-sm btn-outline-primary mx-1"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
