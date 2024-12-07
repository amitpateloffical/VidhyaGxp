import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./AdminLogin.module.css"; // Import the CSS Module
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await toast.promise(
        axios.post("https://gxp-api.mydemosoftware.com/admin/login", {
          email,
          password,
        }),
        {
          pending: "Logging in...",
          success: "Login successful!",
        }
      );
      localStorage.setItem("authToken", response.data.token);
      setTimeout(() => {
        navigate("/admin-dashboard");
      }, 500);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div>
          <img src="\vidyaGxp_logo.png" alt="Logo" className={styles.logo} />
        </div>
        <h2 className={styles.title}>Admin Login</h2>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className={styles.inputField}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={`${styles.inputGroup} ${styles.passwordGroup}`}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              className={styles.inputField}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className={styles.togglePassword}
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEye size={15} /> : <FaEyeSlash size={15} />}
            </button>
          </div>
          <button
            type="submit"
            onClick={handleLogin}
            className={styles.submitBtn}
          >
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;
