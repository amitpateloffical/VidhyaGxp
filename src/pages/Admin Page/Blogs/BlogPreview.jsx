import React from "react";
import styles from "./Blogs.module.css";

export default function BlogPreview({ title, content }) {
  return (
    <div className={styles.preview}>
      <h3>Preview</h3>
      <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>{title}</h4>
      <p
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></p>
    </div>
  );
}
