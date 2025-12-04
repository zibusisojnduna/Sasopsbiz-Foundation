import { Outlet, Link } from "react-router-dom";

export default function Programes() {
  const styles = {
    container: { padding: "20px", color:"black"  },
    linkList: { display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" },
    link: { color: "orange", textDecoration: "none", fontWeight: "bold" }
  };

  return (
    <div style={styles.container}>
      <title>Programes</title>
      <h1 style={{textAlign:"center"}}>Our Programes</h1>
      <div style={styles.linkList}>
        <Link to="learnership" style={styles.link}>Fasset Skills Development Programme</Link>
        <Link to="furnlab" style={styles.link}>Sasopsbiz Furnlab</Link>
        <Link to="swits" style={styles.link}>SWITS</Link>
        <Link to="uceni" style={styles.link}>Umgungundlovu Community Empowerment Network Initiative (UCENI)</Link>
        <Link to="pgeep" style={styles.link}> Phakamisa Girls Economic Empowerment Programme (PGEEP)</Link>
        <Link to="dgrv" style={styles.link}>Cooperative Concept and Governance Training</Link>
        <Link to="foodbev" style={styles.link}>FoodBev Learnership Programme</Link>
      </div>

      {/* 👇 This is where subpage content (e.g., Youth, Women) will appear */}
      <Outlet />
    </div>
  );
}
