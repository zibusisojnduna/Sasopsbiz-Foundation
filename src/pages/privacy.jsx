const PrivacyPolicyModal = ({ isOpen, onClose }) => {
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
      maxWidth: "600px",
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
    text: {
      fontSize: "14px",
      lineHeight: "1.6",
    },
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={onClose}>✕</button>

            <h2>Privacy Policy</h2>
                <p>
                    <strong>Effective Date:</strong>
                </p>

                <p>
                    Sasopsbiz Foundation is committed to protecting your privacy. This policy 
                    explains how we collect, use, and protect your personal information.
                </p>

                <h3>Information We Collect</h3>

                <p>
                    We collect minimal personal information such as your name and email
                    address when you contact us.
                </p>

                <h3>Use of Information</h3>

                <p>
                    Personal information is used only to respond to enquiries and improve
                    our website.
                </p>

                <h3>Your Rights</h3>

                <p>
                    You may request access to, correction, or deletion of your personal
                    information at any time.
                </p>

                <p>
                    Contact us at <strong>siphelele@sasopsbiz.co.za</strong> if you have any questions.
                </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
