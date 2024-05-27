// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
import React, { useEffect } from "react";
import "./style.css";

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props;

    useEffect(() => {
        document.title = currentPage.name;
    }, [currentPage]);

    return (
        <nav >
            <ul className="nav-container">
                {pages.map((page) => (
                    <li 
                        className={currentPage.name === page.name ? "active" : ""} 
                        key={page.name}
                    >
                        <span onClick={() => setCurrentPage(page)}>{page.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
