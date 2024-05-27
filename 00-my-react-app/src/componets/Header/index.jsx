//WHEN I view the header
//THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
import React from "react";
import "./style.css";
import headerPic from "../../assets/header-container.jpg";


  
function Header(props) {
    return (
     <header className="header-container">
        <h1>Welcome to Clifton's Portfolio</h1><br/>
        <img className="img" src={headerPic} alt="react logo" />
            {props.childern}
    </header>
    );
}


export default Header;