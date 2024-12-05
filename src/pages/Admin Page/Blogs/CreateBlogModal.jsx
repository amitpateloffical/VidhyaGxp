import React, { useState } from "react";
import styles from "./Blogs.module.css";
import BlogPreview from "./BlogPreview";
import axios from "axios";
import TinyEditor from "../../../components/TinyEditor";
import { toast, ToastContainer } from "react-toastify";

export default function CreateBlogModal({ onClose, fetchBlogs, onAddBlog }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async () => {
    if (!title || !content || !file) {
      toast.error("Please fill out all fields and select a poster.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", content);
    formData.append("banner_photo", file);
    formData.append("status", "published");

    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.post(
        "http://localhost:1001/admin/create-blog",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      onAddBlog(response.data);
      fetchBlogs();
      onClose();
    } catch (error) {
      console.error("Error creating blog:", error);
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
                <a
                  href={URL.createObjectURL(file)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {file.name.slice(0,25)}
                </a>
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
      <BlogPreview title={title} content={content} />
      <button className={styles.button} onClick={handleSubmit}>
        Add Blog
      </button>
      <button className={styles.closeBtn} onClick={onClose}>
        Close
      </button>
      <ToastContainer />
    </div>
  );
}
