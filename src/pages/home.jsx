import joelMuniz from "../assets/joel-muniz-3k3l2brxmwQ-unsplash.jpg"
import one from "../assets/1.JPG"
import workshop from "../assets/IMG_2743.JPG"
import workshop2 from "../assets/IMG_2693.JPG"
import award from "../assets/IMG_1318.JPG"
import wvlsa from  "../assets/CAN-WVL-GL-strapline.png"

function Home(){
    return(
        <section>
            <title>
             Home
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
                <h2 style={{ padding:"3%" }}>Why was the NPO started?</h2>

                <p>When the Sasopsbiz Foundation was started in Pietermaritzburg in 2018, the founders carried a simple but powerful belief — that when women are economically empowered, they can survive and thrive in any situation.</p>

                <p>From its inception, Sasopsbiz was more than an organisation — it was a movement born from lived realities of inequality, poverty, and the untold stories of girls and women whose potential remained untapped. The founders saw that economic exclusion was not just about income, but about dignity, voice, and choice.</p>

                <p>In South Africa, many girls and young women grow up in environments where opportunity is limited, and dreams are postponed by social and economic barriers. The Sasopsbiz Foundation emerged as a response to this imbalance — offering empowerment through skills, enterprise, and healing.</p>

                <p>It began small — supporting young women in township and rural communities — but the vision was always greater: to build a generation for generations to come.</p>

                <p>Because there is more to empowerment than just giving skills, it’s about nurturing hope, belonging, and independence.</p>

</div>


<div style={{margin:"5%", textAlign:"center", padding:"5%", color:"black"}}>
   <h2 style={{ padding:"3%"}}>The Starfish Philosphy</h2>

<p>There is a story that captures our work best — The Starfish Story by Loren Eiseley.</p>

<p>A man walking along a beach saw a young girl throwing starfish back into the sea.</p>

<p>“There are thousands of them,” he said. “You can’t make a difference.”</p>

<p>The girl smiled, threw another starfish into the waves, and said,
“I made a difference to that one.”</p>

<p>At Sasopsbiz Foundation, every woman we empower is that one starfish.
Our work may not change the entire ocean, but it transforms the lives it touches — deeply, meaningfully, and sustainably.</p> 

<img src={one} alt="one" style={{height:"25%", width:"100%", padding:"5%"}}></img>
</div>

<div style={{margin:"5%", textAlign:"center", padding:"5%", color:"black"}}>
    <h2 style={{ padding:"3%"}}>What is Sasopsbiz Foundation?</h2>

<p>Sasopsbiz Foundation is a social enterprise and non-profit organisation that empowers girls and young women through economic inclusion, enterprise development, vocational training, and social healing.</p>

<p>The Foundation believes that true empowerment integrates both the economic and social dimensions of life — giving women not only tools to work but also the confidence to lead, the freedom to create, and the courage to heal.</p>

<p>Through partnerships with government, private sector, and civil society, Sasopsbiz delivers community-based development programmes that restore dignity, unlock opportunity, and build resilience.</p>


<img src={workshop} alt="workshop" style={{height:"25%", width:"100%", padding:"5%"}} ></img>

</div>

<div style={{margin:"5%", textAlign:"center", padding:"5%", color:"black"}}>
    <h2 style={{ padding:"3%"}}>Our Mission</h2>

<p>To empower and equip girls and young women to achieve sustainable livelihoods through access to skills training, entrepreneurship opportunities, and community support systems — building the foundations for intergenerational transformation.</p>


<img src={workshop2} alt="workshop2" style={{height:"25%", width:"100%", padding:"5%"}}></img>

</div>

<div style={{margin:"5%", textAlign:"center", padding:"5%", color:"black"}}>
    <h2 style={{ padding:"3%"}}>Our Vision</h2><br></br>

<h3>“Building a generation for generations to come.”</h3>

<img src={award} alt="award" style={{height:"25%", width:"100%", padding:"5%"}} ></img>
</div>

<div style={{margin:"5%", textAlign:"center", padding:"5%", color:"black"}}>
    <h2 style={{padding:"3%"}}>Core Programes</h2>

    <h4>Sasops Women in Trades Support Programme (SWITS)</h4>

    <h4>Phakamisa Girls Economic Empowerment Programme</h4>

    <h4>Sasops Furnlab (Furniture Manufacturing Incubator)</h4>

    <h4>Cooperative Concept and Governance Training</h4>
    
    <h4>FoodBev Learnership Programme</h4>

    <h4>Fasset Skills Development Programme</h4>

    <h4>Umgungundlovu Community Empowerment Network Initiative (UCENI)</h4>

    

</div>

<div style={{margin:"5%", textAlign:"center", padding:"5%", color:"black"}}>
    <h2>Our Impact So Far</h2>

    <p>•	Over 400 women and youth trained across KwaZulu-Natal.</p>

    <p>•	Successful transition of participants into jobs and microenterprises.</p>

    <p>•	Strengthened community infrastructure through skills-based projects.</p>

    <p>•	Recognition and awards from national partners for excellence in empowerment.</p>

    <p>•	Established a replicable model for community-rooted, women-led development.</p>


</div>


<div style={{margin:"5%", textAlign:"center", padding:"5%", color:"black"}}>
    <h2>How You Can Support</h2>

    <p>Your partnership helps us expand our reach, create sustainable opportunities, and empower women to lead change in their communities.</p>

    <p>Ways to support:</p>

    <p>•	Partner with us on training, mentorship, or enterprise programmes.</p>

    <p>•	Fund skills initiatives or community projects.</p>

    <p>•	Sponsor equipment, tools, or learning resources.</p>

    <p>•	Volunteer expertise in business, leadership, or the arts.</p>

    <p>Every contribution — large or small — makes a difference to someone’s life.Because when we lift one woman, we lift an entire community.</p>

</div>

<div style={{margin:"5%", textAlign:"center", padding:"5%", color:"black"}}>
    <h2>Acknowledgements</h2>

    <p>Sasopsbiz Foundation proudly collaborates with:</p>

    <h4>WVLSA (Women's Voice and Leadership South Africa)</h4>
    <img src={wvlsa} alt="wvlsa" style={{height:"25%", width:"50%", padding:"5%"}}></img>

    <h4>Gender Links</h4>
    <img></img>

</div>


            
        </section>

        
    )
}
export default Home