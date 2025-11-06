import furnlab from "../assets/IMG_0046.JPG"
function Furnlab(){
    return(
        <section>
            <title>Sasopsbiz Furnlab</title>
            <div style={{margin:"5%", textAlign:"center", padding:"5%", color:"black"}}>
                <h2>Sasopsbiz Furnlab</h2>
                <p>Sasopsbiz Furnlab is a furniture incubator based in Pietermaritzburg. Funded by SEDA, FurnLab offers existing and start up SMMEs from township and rural areas an opportunity to professionalise and scale up their operations through:</p>
                <p>- Access to the factory with state of the art equipment</p>
                <p>- Access to markets</p>
                <p>- Access to funding</p>
                <p>- Technical and business training & mentorship</p>
                <p>- Access to expertise</p>

                <p>Our main aim is import substitution and localisation through:</p>
                <p>- Coordinated production & Product support chain</p>
                <p>- Coordinated market supply</p>
                <p>- Forming of strategic support alliances</p>

                <p>As part of the SASOPSBIZ group. The vision of FurnLab is to be a catalyst for vibrant, dynamic, professional, competitive, and sustainable Small, Micro and Medium Enterprises in KwaZulu-Natal and beyond with a special focus on Wood, Furniture and related products.</p>

                <img src={furnlab} alt="furnlab" style={{height:"25%", width:"100%", padding:"5%"}}></img>

            </div>
        </section>
    )
}
export default Furnlab