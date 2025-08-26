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
            
            <div style={{margin:"5%", textAlign:"center", padding:"5%", display:""}}>
                <h1>Feel free to contact us!</h1>

            </div>

            <div style={{margin:"5%", textAlign:"center", padding:"5%", display:""}}>
                
            </div>

            <div style={{margin:"5%", textAlign:"center", padding:"5%", display:""}}>
                <MdOutlineEmail style={{color:"orange", size:"20"}} /><h3>Email Address:</h3><br></br>
                <h4>siphelele@sasopsbiz</h4>
            </div>

            <div style={{margin:"5%", textAlign:"center", padding:"5%", display:""}}>
                <FaPhone style={{color:"orange"}} /><h3>Phone Number:</h3><br></br>
                <h4>033 307 0898</h4>
            </div>

            <div style={{margin:"5%", textAlign:"center", padding:"5%", display:""}}>
                <IoMdPin style={{color:"orange"}} /><h3>Physical Address:</h3>
                <h4>210 Longmarket Steet, Pietermaritzburg, 3201</h4>
            </div>

        </section>
            
        </>
    )
}

export default Contacts