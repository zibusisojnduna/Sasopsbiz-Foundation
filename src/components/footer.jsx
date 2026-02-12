import { useState } from "react";
import { Link } from "react-router-dom";
import PrivacyPolicyModal from "../pages/privacy";
import TermsModal from "../pages/terms";

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false)

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
    },
    copyright: {
      fontSize: "12px",
    },
  };

  return (
    <>
      <footer style={styles.footer}>
        <div style={styles.links}>
          <span
            style={styles.link}
            onClick={() => setShowPrivacy(true)}
          >
            Privacy Policy
          </span>

          <span
            style={styles.link}
            onClick={() => setShowTerms(true)}
            >
              Terms of Service
            </span>
          
        </div>

        <p style={styles.copyright}>
          © {new Date().getFullYear()} Sasopsbiz Foundation. All rights reserved.
        </p>
      </footer>

      <PrivacyPolicyModal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
      />

      <TermsModal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
      />
    </>
  );
};

export default Footer;
