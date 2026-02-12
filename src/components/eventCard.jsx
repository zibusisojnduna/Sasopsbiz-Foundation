const EventCard = ({name, date, time, location}) => {
  const styles = {
    card: {
      width: "250px",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      textAlign: "center",
      backgroundColor: "#orange",
      margin: "20px auto",
    },
    name: {
      fontSize: "16px",
      color: "black",
    },
    date: {
      fontSize: "16px",
      color: "black",
    },
    time: {
      fontSize: "16px",
      color: "black",
    },
    location: {
      fontSize: "16px",
      color: "black",
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.name}>{name}</div>
      <div style={styles.date}>{date}</div>
      <div style={styles.time}>{time}</div>
      <div style={styles.location}>{location}</div>
    </div>
  );
};

export default EventCard;
