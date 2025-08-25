import React from "react";

const Navbar = () => {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#333",
      padding: "10px 20px",
      color: "white",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    logo: {
      fontSize: "20px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    navLinks: {
      display: "flex",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    link: {
      marginLeft: "20px",
      textDecoration: "none",
      color: "white",
      fontSize: "16px",
      cursor: "pointer",
      transition: "color 0.3s",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>MyApp</div>
      <ul style={styles.navLinks}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#about" style={styles.link}>Our Team</a></li>
        <li><a href="#services" style={styles.link}>Events</a></li>
        <li><a href="#contact" style={styles.link}>Opportunities</a></li>
        <li><a href="#contact" style={styles.link}>Contact Us</a></li>

      </ul>
    </nav>
  );
};

export default Navbar;
