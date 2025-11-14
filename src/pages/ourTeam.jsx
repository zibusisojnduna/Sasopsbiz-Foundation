import fidzani from "../assets/IMG-20200708-WA0093-e1594832326811.jpg"
import pumla from "../assets/Pumla-crop.jpg"
import siphelele from "../assets/Siphelele.jpg"

function Team(){
    return(
        <section>
        <title> Our Team</title>
            <div style={{margin:"5%", textAlign:"center", padding:"5%", color:"black"}}>
                <h1>Meet Our Team</h1>
                
            </div>

            <div style={{margin:"5%", textAlign:"center", padding:"5%",}}>
                <table>
                   <th>
                        <tr><img src={fidzani} alt="fidzani" style={{width:"100%", padding:"5%", height:"25%"}}></img>
                            <h4>Fidzani Nduna</h4>
                            <p>Director/Founder</p>
                        </tr>
                   </th>

                   <th>
                        <tr>
                            <img src={pumla} alt="pumla" style={{width:"100%", padding:"5%", height:"25%"}}></img>
                            <h4>Cynthia Vilakazi</h4>
                            <p>CEO/Founder</p>
                        </tr>

                        <tr>
                            <img src={siphelele} alt="siphelele" style={{width:"100%", padding:"5%", height:"25%"}}></img>
                            <h4>Siphelele Kunene</h4>
                            <p>Office Admin</p>
                        </tr>

                        <tr>
                            <h4>Phila Vilakazi</h4>
                            <p>Project Admin</p>
                        </tr>

                        <tr>
                            <h4>Thabiso Ngubane</h4>
                            <p>Project Finance</p>
                        </tr>

                        <tr>
                            <h4>Zibusiso Nduna</h4>
                            <p>IT/Finance</p>
                        </tr>
                   </th>
                </table>
            </div>

        </section>
    )
}
export default Team