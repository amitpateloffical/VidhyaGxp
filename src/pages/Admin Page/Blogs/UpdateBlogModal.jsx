import React, { useState } from "react";
import styles from "./Blogs.module.css";

export default function UpdateBlogModal({ blog, onClose, onUpdateBlog }) {
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);

  const handleSubmit = () => {
    if (title && content) {
      onUpdateBlog({ ...blog, title, content });
      onClose();
    }
  };

  return (
    <div className={styles.modal}>
      <h2>Update Blog</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleSubmit}>Update Blog</button>
      <button className={styles.closeBtn} onClick={onClose}>
        Close
      </button>
    </div>
  );
}
