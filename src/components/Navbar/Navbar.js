import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">Click That Pic!</Link>
        <div className="collapse navbar-collapse" id="navbarText">
            <span className="navbar-text">
                You know what to do 
                <span role="img" aria-label="winking face emoji lol"> 😉 </span>
            </span>

            <span className="navbar-text">
                Score: {props.score}
            </span>
    
        </div>

    </nav>
);

export default Navbar;