import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / docHeight) * 100;

      setScrollProgress(scrollPercentage);

      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: "3px",
          backgroundColor: "#FFCA00",
          zIndex: 9999,
          transition: "width 0.2s ease-out",
        }}
      ></div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "90px",
            right: "10px",
            backgroundColor: "#FFCA00",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "55px",
            height: "55px",
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 9999,
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>↑</h3>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
