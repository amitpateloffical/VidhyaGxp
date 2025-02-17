import React, { useEffect, useState } from "react";
import styles from "./Blogs.module.css";
import CreateBlogModal from "./CreateBlogModal";
import BlogList from "./BlogList";
import UpdateBlogModal from "./UpdateBlogModal";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  // console.log(blogs,"blogs");

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://gxp-api.mydemosoftware.com/admin/blog-list"
      );
      setBlogs(response.data.data);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleAddBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  const handleUpdateBlog = (updatedBlog) => {
    setBlogs(
      blogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );
  };

  return (
    <div className={styles.container}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "25px",
          backgroundColor: "#ECA73F",
          color: "white",
          padding: "14px",
          borderRadius: "5px",
          marginBottom: "0px",
          marginTop: "19px",
        }}
      >
        Blogs
      </h1>
      <button
        className={styles.button}
        style={{ position: "absolute", right: "0px" }}
        onClick={() => setIsCreateModalOpen(true)}
      >
        Create Blog
      </button>

      {!loading ? (
  <BlogList
    blogs={blogs}
    fetchBlogs={fetchBlogs}
    onEdit={(blog) => {
      setSelectedBlog(blog);
      setIsUpdateModalOpen(true);
    }}
  />
) : (
  <div className={styles["blog-list"]}>
    {[1, 2, 3, 4,5,6].map((_, index) => (
      <div key={index} className="p-3 border rounded shadow-sm">
        <Skeleton height={30} width="80%" className="mb-2" />
        <Skeleton height={250} width="100%" className="mb-3" />
        <div className="d-flex justify-content-between">
          <Skeleton width="30%" />
          <Skeleton width="30%" />
        </div>
        <Skeleton width="100%" count={3} />

        <div className="d-flex justify-content-between mt-3">
          <Skeleton width={100} height={30} />
          <div className="d-flex">
            <Skeleton width={70} height={30} className="mx-1" />
            <Skeleton width={70} height={30} />
          </div>
        </div>
      </div>
    ))}
  </div>
)}

      {isCreateModalOpen && (
        <>
          <div className={styles.overlay} />
          <CreateBlogModal
            onClose={() => setIsCreateModalOpen(false)}
            onAddBlog={handleAddBlog}
            fetchBlogs={fetchBlogs}
          />
        </>
      )}
      {isUpdateModalOpen && selectedBlog && (
        <>
          <div className={styles.overlay} />
          <UpdateBlogModal
            blog={selectedBlog}
            onClose={() => setIsUpdateModalOpen(false)}
            onUpdateBlog={handleUpdateBlog}
            fetchBlogs={fetchBlogs}
          />
        </>
      )}
    </div>
  );
}
