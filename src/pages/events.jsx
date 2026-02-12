import EventCard from "../components/eventCard"

function Events(){
    const events =[
        {
            name:"Sewing Workshop",
            date:"10 February 2026",
            time:"12:00 PM - 2:00 PM",
            location:"210 Langalibalele Street, 1st Floor, Sasopsbiz"
        }
    ]
    const styles = {
    container: {
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: "40px",
    },
  };
    return(
        <section>
            <title>Events</title>
             <div style={styles.container}>
                {events.map((event, index)=> (
                    <EventCard
                    key={index}
                    name={event.name}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                    />
                ))}

            </div>


        </section>
    )
}
export default Events