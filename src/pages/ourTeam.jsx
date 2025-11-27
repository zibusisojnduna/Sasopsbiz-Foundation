import fidzani from "../assets/Nduna-crop.jpg"
import pumla from "../assets/Pumla-crop.jpg"
import siphelele from "../assets/Siphelele.jpg"
import phila from "../assets/placeholder.png"
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
            image:phila,
        },
        {
            name:"Zibusiso Nduna",
            title:"IT/Finance",
            image:phila,
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