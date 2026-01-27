import fidzani from "../assets/Picsart_26-01-27_08-32-34-365.jpg.jpeg"
import pumla from "../assets/Picsart_26-01-27_08-22-31-316.jpg.jpeg"
import siphelele from "../assets/Siphelele.jpg"
import stock from "../assets/placeholder.png"
import phila from "../assets/Picsart_26-01-27_08-24-01-391.jpg.jpeg"
import thabiso from "../assets/Picsart_26-01-27_08-19-12-147.jpg.jpeg"
import zibusiso from "../assets/Picsart_26-01-27_08-28-45-486.jpg.jpeg"
import ProfileCard from "../components/teamCard"

function Team(){
    const people =[
        {
            name:"Fidzani Nduna",
            title:"Director/Co-Founder",
            image:fidzani,
        },
        {
            name:"Pumla Vilakazi",
            title:"CEO/Co-Founder",
            image:pumla,
        },
        {
            name:"Siphelele Kunene",
            title:"Office Admin",
            image:siphelele,
        },
        {
            name:"Phila Vilakazi",
            title:"Project Admin",
            image:phila,
        },
        {
            name:"Thabiso Ngubane",
            title:"Project Finance",
            image:thabiso,
        },
        {
            name:"Zibusiso Nduna",
            title:"IT/Finance",
            image:zibusiso,
        },
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
        <title> Our Team</title>
            <div style={styles.container}>
                {people.map((person, index)=> (
                    <ProfileCard
                    key={index}
                    name={person.name}
                    title={person.title}
                    image={person.image}
                    />
                ))}

            </div>


        </section>
    )
}
export default Team