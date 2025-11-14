import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoMdPin } from "react-icons/io";
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

            

            <div style={{margin:"5%", textAlign:"center", padding:"5%", color:"black", display:"flex"}}>
                <div>
                    
                </div>
                <MdOutlineEmail style={{color:"orange", size:"20"}}/><h3>Email Address:</h3><br></br>
                

                <FaPhone style={{color:"orange", size:"20"}}/><h3>Phone Number:</h3><br></br>
                

                <IoMdPin style={{color:"orange", size:"20"}} /><h3>Physical Address:</h3><br></br>
                
            </div>

            

            

        </section>
            
        </>
    )
}

export default Contacts