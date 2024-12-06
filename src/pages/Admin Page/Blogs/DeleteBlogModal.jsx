import { faTrashAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import styles from "./DeleteModal.module.css";

const DeleteBlogModal = ({ isOpen, onClose, item, fetchBlogs }) => {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleDelete = async () => {
    const token = localStorage.getItem("authToken");
    setLoading(true);
    try {
      await toast.promise(
        axios.delete(`http://localhost:1001/admin/delete-blog/${item}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        {
          pending: "Deleting the blog...",
          success: "Blog deleted successfully!",
          error: "Failed to delete the blog.",
        }
      );
      fetchBlogs(); // Refresh blogs after deletion
      onClose(); // Close the modal
    } catch (error) {
      console.error("Error deleting the blog:", error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          disabled={loading} // Disable close button during loading
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
        <div className={styles.content}>
          <div className={styles.iconWrapper}>
            <FontAwesomeIcon icon={faTrashAlt} className={styles.icon} />
          </div>
          <h2 className={styles.title}>Delete Confirmation</h2>
          <p className={styles.description}>
            Are you sure you want to delete this blog? This action is permanent
            and cannot be undone.
          </p>
          <div className={styles.buttonGroup}>
            <button
              className={styles.cancelButton}
              onClick={onClose}
              disabled={loading} // Disable cancel button during loading
            >
              Cancel
            </button>
            <button
              className={styles.deleteButton}
              onClick={handleDelete}
              disabled={loading} // Disable delete button during loading
            >
              {loading ? "Deleting..." : "Delete"} {/* Show status */}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DeleteBlogModal;
