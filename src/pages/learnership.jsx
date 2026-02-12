import fasset from "../assets/FASSET.jpg"
function Learnership(){
    return(
        <section>
            <title>Fasset Skills Development Programme</title>
            <div style={{textAlign:"center"}}>
                            <img src={fasset} alt="fasset" style={{height:"25%", width:"25%", padding:"1%"}}></img>
            </div>
            
            <div style={{margin:"5%", padding:"5%", color:"black"}}>
                <h2>Fasset Skills Development Programme</h2>
                <h3>Partner: FASETT SETA | Participants: 40</h3>

                <p>This initiative equipped graduates with vital skills in finance, technology, administration, and operations.The programme achieved a 100% placement rate, helping graduates transition into meaningful work or entrepreneurship.</p>
            </div>
        </section>
    )
}
export default Learnership