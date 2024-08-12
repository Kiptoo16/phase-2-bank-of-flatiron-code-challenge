import { Link } from "react-router-dom";
import React from "react";

export default function Navbar(){
    return(
        
        <>
            <Link to="/">Home--</Link>

            <Link to="/about">About--</Link>

            <Link to="/contact">Contact</Link>
        </>
    );
}