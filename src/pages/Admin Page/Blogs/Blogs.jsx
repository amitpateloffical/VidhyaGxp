import React, { useEffect, useState } from "react";
import styles from "./Blogs.module.css";
import CreateBlogModal from "./CreateBlogModal";
import BlogList from "./BlogList";
import UpdateBlogModal from "./UpdateBlogModal";
import axios from "axios";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
console.log(blogs,"blogs");

const fetchBlogs = async () => {
  const response = await axios.get("http://localhost:1001/admin/blog-list");
  setBlogs(response.data.data);
};
useEffect(() => {
  fetchBlogs();
}, []);

  const handleAddBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };


  const handleUpdateBlog = (updatedBlog) => {
    setBlogs(blogs.map(blog => blog.id === updatedBlog.id ? updatedBlog : blog));
  };

  return (
    <div className={styles.container}>
      <h1 style={{textAlign:"center", fontSize:"25px", backgroundColor: "#ECA73F",color:"white",padding:"14px",borderRadius:"5px",marginBottom:"0px"}}>Blogs</h1>
      <button className={styles.button} style={{  position: "absolute",
  right:"0px"}} onClick={() => setIsCreateModalOpen(true)}>Create Blog</button>
      <BlogList
        blogs={blogs}
        fetchBlogs={fetchBlogs}
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
