import React, { useState } from "react";
import styles from "./Blogs.module.css";
import DeleteBlogModal from "./DeleteBlogModal";

export default function BlogList({ onEdit, blogs, fetchBlogs }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [expandedBlog, setExpandedBlog] = useState(null); // Track which blog is expanded

  console.log(itemToDelete, "itemToDelete");

  const openDeleteModal = (blog) => {
    setItemToDelete(blog.id);
    console.log(blog, "blogblog");
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setItemToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const toggleDescription = (blogId) => {
    setExpandedBlog(expandedBlog === blogId ? null : blogId);
  };

  return (
    <div className={styles["blog-list"]}>
      {blogs.map((blog) => (
        <div key={blog.id} className={styles["blog-item"]}>
          <h3 style={{ color: "#0D6EFD" }}>{blog.title}</h3>
          <div>
            <img
              src={blog.banner_photo}
              alt="Blog Banner"
              className="img-fluid rounded shadow-sm mb-3"
              style={{ width: 850, height: 250 }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Posted on: {new Date(blog.createdAt).toLocaleString()}</p>
            <p>Posted By: {"Rupesh Patil"}</p>
          </div>

          {/* Conditional Rendering of Description */}
          <p
            dangerouslySetInnerHTML={{
              __html:
                expandedBlog === blog.id
                  ? blog?.description
                  : `${blog?.description?.slice(0, 200)}...`,
            }}
          ></p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
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
              className="btn text-primary btn-sm read-more-btn"
              onClick={() => toggleDescription(blog.id)}
            >
              {expandedBlog === blog.id ? "Read Less" : "...Read More"}
            </button>
            <div>
              <button className={styles.button} onClick={() => onEdit(blog)}>
                Edit
              </button>
              <button
                className={styles.closeBtn}
                onClick={() => openDeleteModal(blog)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      {isDeleteModalOpen && itemToDelete && (
        <DeleteBlogModal
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          item={itemToDelete}
          fetchBlogs={fetchBlogs}
        />
      )}
    </div>
  );
}
