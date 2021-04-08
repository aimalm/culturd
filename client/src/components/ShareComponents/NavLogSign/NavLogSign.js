
import './NavLogSign.css';
import home from '../image/home.png'
import { Link } from "react-router-dom";
import { MdContactMail} from "react-icons/md";

function NavLogSign() {
   
    return (
        <div>
            <div className="home-arrow">
                <Link to="/">
                    <img src={home} className="arrow" alt=""/>
                </Link>
            </div>
            <div className="reg-button-container">
            <Link to="/contact_us"> <button className="reg-dropdown-button">
             <span className="angle-icon"><MdContactMail /> CONTACT US</span> </button></Link> 
        </div>
    </div>
    );
}

export default NavLogSign;


