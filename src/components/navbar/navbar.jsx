import {NavLink} from "react-router-dom";

import ButtonDarkMode from "../buttonDarkMode/buttonDarkMode";

import "./navbar.css";

const Navbar = () => {
    return ( 
        <nav className="nav">
            <div className="container">
                <div className="nav__row">
                    
                    <NavLink className="logo" to="/"><b>Freelancer</b> portfolio</NavLink>

                    <ButtonDarkMode />

                    <div className="nav__list">
                        <NavLink to="/" className="nav__list-item">Projects</NavLink>
                        <NavLink to="/skills" className="nav__list-item">Skills</NavLink>
                        <NavLink to="/contacts" className="nav__list-item">Contacts</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;