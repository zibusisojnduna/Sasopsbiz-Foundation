import React from "react";

const Navbar = () => {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "orange",
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
      <div style={styles.logo}><img src="../src/assets/favicon-32x32.png" style={{}}></img></div>
      <ul style={styles.navLinks}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#team" style={styles.link}>Our Team</a></li>
        <li><a href="#events" style={styles.link}>Events</a></li>
        <li><a href="#opportunities" style={styles.link}>Opportunities</a></li>
        <li><a href="#contacts" style={styles.link}>Contact Us</a></li>

      </ul>
    </nav>
  );
};

export default Navbar;
