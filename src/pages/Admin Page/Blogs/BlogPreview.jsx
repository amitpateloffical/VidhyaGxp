import React from "react";
import styles from "./Blogs.module.css";

export default function BlogPreview({ title, content }) {
  return (
    <div className={styles.preview}>
      <h3>Preview</h3>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}
