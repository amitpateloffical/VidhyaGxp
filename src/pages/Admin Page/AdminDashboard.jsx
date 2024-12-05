import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdMenuOpen, MdOutlineMenu } from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";
import { LiaBlogSolid } from "react-icons/lia";
import { FiMenu } from "react-icons/fi";
import { IoSettings } from "react-icons/io5";
import styles from "./AdminDashboard.module.css";
import axios from "axios";
import Blogs from "./Blogs/Blogs";

function AdminDashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [contactUsList, setContactUsList] = useState([]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const fetchData = async () => {
      try {
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const res = await axios.get(
          "http://localhost:1001/admin/contact-us-list",
          config
        );
        setContactUsList(res.data.data);
        console.log("Fetched data:", res.data.data);
      } catch (error) {
        console.error("Error fetching contact us list:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div
        className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}
      >
        {isCollapsed ? (
          <div
            className={styles.toggleIcon}
            style={{ padding: "12px", textAlign: "center", marginTop: "5px" }}
            onClick={toggleSidebar}
          >
            <MdOutlineMenu size={24} />
          </div>
        ) : (
          <div>
            <img
              src="\vidyaGxp_logo.png"
              style={{ width: "211px", objectFit: "cover" }}
              alt="Logo"
            />
          </div>
        )}
        <hr
          style={{
            margin: "0px",
            padding: "0px",
            marginBottom: "15px",
            marginTop: "14px",
          }}
        />
        <div
          className={`${styles.sidebarItem} ${
            activeSection === "dashboard" ? styles.active : ""
          }`}
          onClick={() => handleSectionChange("dashboard")}
        >
          <BiSolidDashboard size={24} />
          {!isCollapsed && (
            <span className={styles.sidebarItemText}>Dashboard</span>
          )}
        </div>
        <div
          className={`${styles.sidebarItem} ${
            activeSection === "blogs" ? styles.active : ""
          }`}
          onClick={() => handleSectionChange("blogs")}
        >
          <LiaBlogSolid size={24} />
          {!isCollapsed && (
            <span className={styles.sidebarItemText}>Blogs</span>
          )}
        </div>
        <div
          className={`${styles.sidebarItem} ${
            activeSection === "settings" ? styles.active : ""
          }`}
          onClick={() => handleSectionChange("settings")}
        >
          <IoSettings size={24} />
          {!isCollapsed && (
            <span className={styles.sidebarItemText}>Settings</span>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Header */}
        <div className={styles.header}>
          {!isCollapsed ? (
            <div
              className={styles.toggleIcon}
              style={{ padding: "12px 18px 12px 18px" }}
              onClick={toggleSidebar}
            >
              <MdMenuOpen size={24} />
            </div>
          ) : (
            <div>
              <img
                src="\vidyaGxp_logo.png"
                className={styles.logo}
                alt="Logo"
              />
            </div>
          )}

          <div className={styles.searchWrapper}>
            <div className={styles.searchInput}>
              <input
                type="text"
                placeholder="search..."
                className={styles.searchInput}
              />
            </div>
            <p className={styles.profileIconWrapper}>
              <CgProfile size={30} />
            </p>
          </div>
        </div>

        <div>
          {activeSection === "dashboard" && (
            <div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center",
                  backgroundColor: "#ECA73F",
                  padding: "14px",
                  color: "white",
                  borderRadius: "5px",
                  marginBottom: "20px",
                  marginTop: "19px",
                }}
              >
                Contact Us List
              </div>

              <div className={styles.tableContainer}>
                <table className={styles.customTable}>
                  <thead>
                    <tr>
                      <th style={{ width: "70px" }}>S.No.</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Contact</th>
                      <th>Service</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contactUsList.length > 0 ? (
                      contactUsList.map((contactUs, index) => (
                        <tr>
                          <td style={{ width: "70px" }}>{index + 1}.</td>
                          <td>
                            {contactUs.name} {contactUs.lastName}
                          </td>
                          <td>{contactUs.recipientEmail}</td>
                          <td>
                            +{contactUs.countryCode}-{contactUs.contact}
                          </td>
                          <td>{contactUs.service}</td>
                          <td>{contactUs.messageBody}</td>
                        </tr>
                      ))
                    ) : (
                      <div
                        className={styles.tableContainer}
                        style={{ marginBottom: "20px" }}
                      >
                        <table className={styles.customTable}>
                          <thead>
                            <tr>
                              <th style={{ textAlign: "center" }}>
                                No Data Found
                              </th>
                            </tr>
                          </thead>
                        </table>
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeSection === "blogs" && (
            <div>
              <Blogs />
            </div>
          )}
          {activeSection === "settings" && <div>Settings Content</div>}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
