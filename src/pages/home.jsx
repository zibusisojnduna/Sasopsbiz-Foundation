import joelMuniz from "../assets/joel-muniz-3k3l2brxmwQ-unsplash.jpg"
import one from "../assets/1.JPG"
import workshop from "../assets/IMG_2743.JPG"
import workshop2 from "../assets/IMG_2693.JPG"
import award from "../assets/IMG_1318.JPG"

function Home(){
    return(
        <section>
            <title>
             Sasopsbiz Foundation - Home
            </title>
            <div style={{margin:"5%", textAlign:"center", padding:"5%"}}>
                <h2>Welcome to</h2><br></br>
                <h1 style={{ color:"orange"}}>Sasopsbiz Foundation</h1>
            </div>

            <div style={{margin:"5%", textAlign:"center", padding:"5%"}}>
                <img src={joelMuniz} alt="joelMuniz" style={{height:"25%", width:"100%", padding:"5%"}}>

                </img>
            </div>

            <div style={{margin:"5%", textAlign:"center", padding:"5%", color:"black"}}>
                <h1 style={{ padding:"3%" }}>Empowering Communities. Transforming Lives. Building a Just Future.</h1>

                <h3>Founded in 2018 and based in Pietermaritzburg, KwaZulu-Natal, the SASOPSBIZ
Foundation is a Non-Profit Organisation dedicated to advancing economic justice and
creating opportunities for sustainable livelihoods. Our central mission is to empower
previously disadvantaged individuals—particularly women and youth—to become
economically independent, resilient, and confident contributors to society.</h3>

<h3>We believe that true empowerment goes beyond financial security—it is about restoring
dignity, unlocking potential, and breaking the cycles of poverty and inequality that continue
to hold back communities.</h3>

</div>


<div style={{margin:"5%", textAlign:"center", padding:"5%", color:"black"}}>
   <h1 style={{ padding:"3%"}}>Why Economic Independence Matters</h1>

<h3>Economic independence is more than just earning an income—it is a powerful tool for social
change. When women and youth gain access to resources, skills, and opportunities:</h3>

<h3>-They gain freedom and safety: Women with economic stability are better able to
make independent choices, reducing vulnerability to gender-based violence, abuse,
and exploitation.</h3>

<h3>-They protect and nurture families: Financial independence enables mothers and
caregivers to provide secure homes, quality education, and healthcare for their
children.</h3>

<h3>
    -They uplift communities: Empowered individuals become role models, business
owners, and community leaders who inspire change and create opportunities for
others.
</h3>



<h3>
    - They break cycles of dependency: By equipping disadvantaged groups with skills
and resources, we help reduce unemployment, substance abuse, and other social skills
that often thrive in environments of economic vulnerability.
</h3> 

<img src={one} alt="one" style={{height:"25%", width:"100%", padding:"5%"}}></img>
</div>

<div style={{margin:"5%", textAlign:"center", padding:"5%", color:"black"}}>
    <h1 style={{ padding:"3%"}}>Our Commitment</h1>

<h2>At SASOPSBIZ Foundation, we are committed to:</h2>

<h3>-Skills Development &amp; Training – Providing accredited training, mentorship, and
pathways to entrepreneurship.</h3>

<h3>-Enterprise Support – Equipping small businesses and cooperatives with the tools
and networks needed to thrive.</h3>

<h3>- Youth Empowerment – Preparing the next generation with the digital, technical, and
entrepreneurial skills needed in a changing economy.</h3>

<h3>
    - Community Transformation – Partnering with stakeholders to drive holistic
development and social impact.
</h3>

<img src={workshop} alt="workshop" style={{height:"25%", width:"100%", padding:"5%"}} ></img>

</div>

<div style={{margin:"5%", textAlign:"center", padding:"5%", color:"black"}}>
    <h1 style={{ padding:"3%"}}>Our Vision</h1>

<h3>A South Africa where every individual—regardless of background—has the opportunity to
achieve economic independence, live free from violence, and contribute to the growth and
well-being of their communities.</h3>


<img src={workshop2} alt="workshop2" style={{height:"25%", width:"100%", padding:"5%"}}></img>

</div>

<div style={{margin:"5%", textAlign:"center", padding:"5%", color:"black"}}>
    <h1 style={{ padding:"3%"}}>Join Us in Building a Future of Dignity and Hope</h1><br></br>

<h3>Your support can make a real difference. Whether through partnership, volunteering, or
donations, you can help us expand our reach and change more lives. Together, we can break
barriers, create opportunities, and build safer, more inclusive communities for women,
children, and generations to come.</h3>

<img src={award} alt="award" style={{height:"25%", width:"100%", padding:"5%"}} ></img>
</div>




            
        </section>

        
    )
}
export default Home