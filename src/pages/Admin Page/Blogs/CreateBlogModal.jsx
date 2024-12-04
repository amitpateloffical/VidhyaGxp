import React, { useState } from "react";
import styles from "./Blogs.module.css";
import BlogPreview from "./BlogPreview";

export default function CreateBlogModal({ onClose, onAddBlog }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (title && content) {
      onAddBlog({ id: Date.now(), title, content });
      onClose();
    }
  };

  return (
    <div className={styles.modal}>
      <h2>Create Blog</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <BlogPreview title={title} content={content} />
      <button onClick={handleSubmit}>Add Blog</button>
      <button className={styles.closeBtn} onClick={onClose}>
        Close
      </button>
    </div>
  );
}
