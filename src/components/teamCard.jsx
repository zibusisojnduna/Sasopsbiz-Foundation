const ProfileCard = ({name, title, image}) => {
  const styles = {
    card: {
      width: "250px",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      textAlign: "center",
      backgroundColor: "#fff",
      margin: "20px auto",
    },
    image: {
      width: "130px",
      height: "150px",
      objectFit: "cover",
      marginBottom: "15px",
    },
    name: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    title: {
      fontSize: "16px",
      color: "gray",
    },
  };

  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image}></img>
      <div style={styles.name}>{name}</div>
      <div style={styles.title}>{title}</div>
    </div>
  );
};

export default ProfileCard;
