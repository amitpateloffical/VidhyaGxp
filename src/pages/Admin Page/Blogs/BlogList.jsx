import React from "react";
import styles from "./Blogs.module.css";

export default function BlogList({ blogs, onEdit }) {
  return (
    <div className={styles["blog-list"]}>
      <h2>Blog List</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className={styles["blog-item"]}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <button onClick={() => onEdit(blog)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
