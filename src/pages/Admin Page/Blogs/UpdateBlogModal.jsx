import React, { useState } from "react";
import axios from "axios";
import styles from "./Blogs.module.css";
import TinyEditor from "../../../components/TinyEditor";

export default function UpdateBlogModal({ blog, onClose, onUpdateBlog,fetchBlogs }) {
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.description);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title || !content) {
      alert("Please fill out all fields.");
      return;
    }

    const updatedBlog = { title, description: content };

    try {
      setIsLoading(true);
      const token = localStorage.getItem("authToken");

      const response = await axios.put(
        `http://localhost:1001/admin/update-blog/${blog.id}`, 
        updatedBlog,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      fetchBlogs();
      onUpdateBlog(response.data);
      onClose(); 
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("Failed to update the blog. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.modal}>
      <h2>Update Blog</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog Title"
      />
      <TinyEditor
        editorContent={content}
        setEditorContent={setContent}
      />
      <button
        className={styles.button}
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? "Updating..." : "Update Blog"}
      </button>
      <button className={styles.closeBtn} onClick={onClose} disabled={isLoading}>
        Close
      </button>
    </div>
  );
}
