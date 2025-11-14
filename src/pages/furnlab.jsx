import furnlab from "../assets/IMG_0046.JPG"
function Furnlab(){
    return(
        <section>
            <title>Sasopsbiz Furnlab</title>
            <div style={{margin:"5%", textAlign:"center", padding:"5%", color:"black"}}>
                <h2>Sasops Furnlab (Furniture Manufacturing Incubator)</h2>
                <h3>Partner: SEDA | Participants: 45</h3>

                <p>The Sasops Furnlab supports artisans from under-resourced areas to professionalise and grow their furniture businesses.
Participants receive access to shared production facilities, mentorship, and both accredited and non-accredited training in woodworking, entrepreneurship, and market readiness.
This initiative promotes import substitution and localisation, helping to build a self-sustaining, proudly South African furniture value chain.</p>

                <img src={furnlab} alt="furnlab" style={{height:"25%", width:"100%", padding:"5%"}}></img>

            </div>
        </section>
    )
}
export default Furnlab