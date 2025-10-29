import logo from '../assets/favicon-32x32.png'

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "orange",
    },
    logo: {
      display: "flex",
      alignItems: "center",
    },
    navLinks: {
      listStyle: "none",
      display: "flex",
      gap: "20px",
      margin: 0,
      padding: 0,
      position: "relative",
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "16px",
      cursor: "pointer",
      position: "relative",
    },
    dropdown: {
      position: "absolute",
      top: "30px",
      left: "0",
      backgroundColor: "orange",
      borderRadius: "5px",
      display: "flex",
      flexDirection: "column",
      padding: "10px 0",
      minWidth: "150px",
      boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
      zIndex: 10,
    },
    dropdownItem: {
      color: "white",
      padding: "8px 16px",
      textDecoration: "none",
      fontSize: "15px",
      cursor: "pointer",
      transition: "background 0.2s ease",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}><img src={logo} alt="logo" style={{}}></img></div>
      <ul style={styles.navLinks}>
        <li><a href="\" style={styles.link}>Home</a></li>
        <li><a href="team" style={styles.link}>Our Team</a></li>
        <li><a href="programes" style={styles.link}>Programes</a></li>
        <li><a href="events" style={styles.link}>Events</a></li>
        <li><a href="opportunities" style={styles.link}>Opportunities</a></li>
        <li><a href="gallery" style={styles.link}>Gallery</a></li>
        <li><a href="contacts" style={styles.link}>Contact Us</a></li>

      </ul>
    </nav>
  );
}
export default Navbar