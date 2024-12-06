import React, { useState } from "react";
import axios from "axios";
import styles from "./Blogs.module.css";
import TinyEditor from "../../../components/TinyEditor";

export default function UpdateBlogModal({
  blog,
  onClose,
  onUpdateBlog,
  fetchBlogs,
}) {
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.description);
  const [file, setFile] = useState(blog.banner_photo); // Handles existing URL
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async () => {
    if (!title || !content) {
      alert("Please fill out all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", content);

    if (file instanceof File) {
      formData.append("banner_photo", file);
    }

    try {
      setIsLoading(true);
      const token = localStorage.getItem("authToken");

      const response = await axios.put(
        `http://localhost:1001/admin/update-blog/${blog.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
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
      <div className={styles.modalHeader}>
      <h2>Update Blog</h2>
        <button
          type="button"
          className={styles.removeFileBtn}
          onClick={onClose}
          style={{
            textAlign: "end",
            right: "17px",
            position: "absolute",
            top: "15px",
            fontSize: "20px",
          }}
        >
          ✖
        </button>
      </div>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog Title"
        className={styles.input}
      />

      <div className={styles.fileContainer}>
        <label className={styles.colorLabel}>Poster Image</label>
        <div>
          {file ? (
            <div className={styles.fileActions}>
              <button
                type="button"
                onClick={() => document.getElementById("posterInput").click()}
                className={styles.changeFileBtn}
              >
                Change File
              </button>
              <h3 className={styles.fileDetails}>
                <span>Selected File:</span>
                {file instanceof File ? (
                  <a
                    href={URL.createObjectURL(file)}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={file.name}
                  >
                  {file.name.split("/").pop().slice(0, 30)}
                  </a>
                ) : (
                  <a
                  href={file}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={file}
                >
                  {file.split("/").pop().slice(0, 30)}
                </a>
                
                )}
                <button
                  type="button"
                  className={styles.removeFileBtn}
                  onClick={() => setFile(null)}
                >
                  ✖
                </button>
              </h3>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => document.getElementById("posterInput").click()}
              className={styles.selectFileBtn}
              style={{marginBottom:"25px"}}
            >
              Select File
            </button>
          )}
          <input
            type="file"
            id="posterInput"
            onChange={handleFileChange}
            className={styles.hiddenInput}
          />
        </div>
      </div>

      <TinyEditor editorContent={content} setEditorContent={setContent} />

      <div className={styles.actionButtons}>
        <button
          className={styles.button}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Updating..." : "Update Blog"}
        </button>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          disabled={isLoading}
        >
          Close
        </button>
      </div>
    </div>
  );
}
