import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )    
}
export default Layout