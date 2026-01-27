const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modal: {
      backgroundColor: "#fff",
      padding: "20px",
      maxWidth: "650px",
      width: "90%",
      maxHeight: "80vh",
      overflowY: "auto",
      borderRadius: "8px",
      position: "relative",
    },
    closeBtn: {
      position: "absolute",
      top: "10px",
      right: "15px",
      border: "none",
      background: "none",
      fontSize: "18px",
      cursor: "pointer",
    },
    heading: {
      marginBottom: "10px",
    },
    subheading: {
      marginTop: "15px",
      marginBottom: "5px",
      fontSize: "15px",
    },
    text: {
      fontSize: "14px",
      lineHeight: "1.6",
    },
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={onClose}>✕</button>

        <h2 style={styles.heading}>Terms of Service</h2>

        <p style={styles.text}>
          By accessing and using the Sasopsbiz Foundation website, you agree to
          comply with and be bound by these Terms of Service.
        </p>

        <h4 style={styles.subheading}>Use of Website</h4>
        <p style={styles.text}>
          This website is intended for informational purposes only. You agree
          not to misuse the website or engage in any activity that could damage,
          disable, or impair its functionality.
        </p>

        <h4 style={styles.subheading}>Intellectual Property</h4>
        <p style={styles.text}>
          All content on this website, including text, images, and logos, is
          the property of Sasopsbiz Foundation unless otherwise stated and may
          not be reproduced without permission.
        </p>

        <h4 style={styles.subheading}>Limitation of Liability</h4>
        <p style={styles.text}>
          Sasopsbiz Foundation shall not be held liable for any direct or
          indirect damages arising from the use of this website.
        </p>

        <h4 style={styles.subheading}>Changes to These Terms</h4>
        <p style={styles.text}>
          We reserve the right to update these Terms of Service at any time.
          Continued use of the website constitutes acceptance of any changes.
        </p>
      </div>
    </div>
  );
};

export default TermsModal;
