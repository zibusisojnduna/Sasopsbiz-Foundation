import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoMdPin } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Contacts(){
    return(
        <>
        <section>
            <title>
             Contact Us
            </title>
            
            <div style={{margin:"5%", textAlign:"center", padding:"5%", color:"black" }}>
                <h1>Feel free to contact us!</h1>

            </div>

            <div style={{margin:"5%", textAlign:"center", padding:"5%", color:"black"}}>
                
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3468.973434307408!2d30.375768874881903!3d-29.60445851101197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef6bd006de5086f%3A0x1d59555e22f765f1!2sSASOPSBIZ!5e0!3m2!1sen!2sza!4v1756281868141!5m2!1sen!2sza"
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

            </div>

            

            <div style={{ padding:"5%", color:"black", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <MdOutlineEmail style={{color:"orange"}}/>
                <h3>Email Address:</h3>
                <div>
                    <p>siphelele@sasopsbiz.co.za</p>
                </div>
            </div>

            <div style={{ padding:"3%", color:"black", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <FaPhone style={{color:"orange", size:"20"}}/><h3>Phone Number:</h3>
                <div>
                    <p>033 307 0898</p>
                </div>
            </div>

            <div style={{ padding:"3%", color:"black", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <IoMdPin style={{color:"orange", size:"20"}} /><h3>Physical Address:</h3><br></br>
                <div >
                    <p>210 Langalibalele Street, Pietermaritzburg, 3201</p>
                </div>

            </div>

            <div style={{ padding:"3%", color:"black", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <h3>Our Social Media handles:</h3>
            </div>

             <div style={{ padding:"3%", color:"black", display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <FaFacebook style={{color:"orange"}}/>
                    <h3>Facebook:</h3>
                    <p>Sasopsbiz Foundation</p>
            </div>

            <div style={{ padding:"3%", color:"black", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <FaInstagramSquare style={{color:"orange"}} />
                <h3>Instagram:</h3>
                <p>@sasopsbizfoundation</p>
            </div>

            <div style={{ padding:"3%", color:"black", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <FaXTwitter style={{color:"orange"}} />
                <h3>Twitter/X:</h3>
                <p>@SasopsbizF</p>
            </div>

            <div style={{ padding:"3%", color:"black", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <FaLinkedin style={{color:"orange"}}/>
                <h3>Linkedin:</h3>
                <p>Sasopsbiz</p>
            </div>

            <div style={{ padding:"3%", color:"black", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <FaTiktok style={{color:"orange"}}/>
                <h3>Tiktok:</h3>
                <p>@sasopsbizfoundation</p>
            </div>



            
                

                

            

        </section>
            
        </>
    )
}

export default Contacts