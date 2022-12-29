import { useState } from "react";

import "../styles/navbar.css"
import logo from "../assets/images/logo.svg"

export default function Navbar() {

    const [isExpanded, setIsExpanded] = (window.innerWidth <= 768) ? useState(false) : useState(true)
    
    
    // alert(isExpanded)
    function toggle() {
        setIsExpanded(!isExpanded)
    }
    return (
        <nav>
            <img src="src/assets/images/logo.svg" width="50px" />
            <img onClick={toggle} className="menu--icon" src={logo} width="50px" />

            <div className={isExpanded ? "menu--container menu--show": "menu--container"}>
                <ul className="menu--expanded">
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                    <li onClick={toggle} id="closeNav"> <img src="src/assets/images/icon-menu-close.svg" />  </li>
                </ul>
            </div>
        </nav>
    )
}