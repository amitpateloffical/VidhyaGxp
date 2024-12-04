import React, { useState } from "react";
import styles from "./Blogs.module.css";
import CreateBlogModal from "./CreateBlogModal";
import BlogList from "./BlogList";
import UpdateBlogModal from "./UpdateBlogModal";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleAddBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  const handleUpdateBlog = (updatedBlog) => {
    setBlogs(blogs.map(blog => blog.id === updatedBlog.id ? updatedBlog : blog));
  };

  return (
    <div className={styles.container}>
      <h1>Blogs</h1>
      <button onClick={() => setIsCreateModalOpen(true)}>Create Blog</button>
      <BlogList
        blogs={blogs}
        onEdit={(blog) => {
          setSelectedBlog(blog);
          setIsUpdateModalOpen(true);
        }}
      />
      {isCreateModalOpen && (
        <>
          <div className={styles.overlay} />
          <CreateBlogModal
            onClose={() => setIsCreateModalOpen(false)}
            onAddBlog={handleAddBlog}
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
          />
        </>
      )}
    </div>
  );
}
