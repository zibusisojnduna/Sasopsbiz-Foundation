const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "orange",
      color: "white",
      textAlign: "center",
      padding: "20px 10px",
      marginTop: "40px",
    },
    links: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginBottom: "10px",
      flexWrap: "wrap",
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "14px",
      cursor: "pointer",
      transition: "color 0.3s",
    },
    copyright: {
      fontSize: "12px",
      color: "white",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.links}>
        <a href="#privacy" style={styles.link}>Privacy Policy</a>
        <a href="#terms" style={styles.link}>Terms of Service</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </div>
      <p style={styles.copyright}>
        © {new Date().getFullYear()} Sasopsbiz Foundation. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer