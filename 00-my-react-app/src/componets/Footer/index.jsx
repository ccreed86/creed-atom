// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 
import React from "react";
import "./style.css";

function Footer() {
    const icons =  [
        {
            name: "fa-brands fa-square-github",
            links: "https://github.com/ccreed86"
        },
        {
            name: "fa-brands fa-linkedin",
            links: "https://www.linkedin.com/in/clifton-reed-53844619b/"
        },
        {
            name: "fa-brands fa-stack-overflow",
            links: "https://stackoverflow.com/users/24299862/cliff"
        }
    ]


    return (
        <footer className="footer-style">
            <section>
                <span className = "span-style">©2024</span>
            {icons.map(icon => { 
                return <a href={icon.links} key={icon.name} target="_blank" rel="noopener no referrer" className="link-style"><i className={icon.name}></i>
                </a>})}
            </section>
        </footer>
    )
}


export default Footer;