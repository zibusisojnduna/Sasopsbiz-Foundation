import { Outlet, Link } from "react-router-dom";

export default function Programes() {
  const styles = {
    container: { padding: "20px", textAlign: "center" },
    linkList: { display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" },
    link: { color: "orange", textDecoration: "none", fontWeight: "bold" }
  };

  return (
    <div style={styles.container}>
      <h1>Our Programes</h1>
      <div style={styles.linkList}>
        <Link to="learnership" style={styles.link}>Student Learnership</Link>
        <Link to="furnlab" style={styles.link}>Sasopsbiz Furnlab</Link>
        <Link to="swits" style={styles.link}>SWITS</Link>
        <Link to="uceni" style={styles.link}>Umgungundlovu Community Empowerment Network Initiative (UCENI)</Link>
      </div>

      {/* 👇 This is where subpage content (e.g., Youth, Women) will appear */}
      <Outlet />
    </div>
  );
}
