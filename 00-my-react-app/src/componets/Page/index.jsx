import React from "react";

import About from "../../pages/about";
import Portfolio from "../../pages/portfolio";
import Resume from "../../pages/resume";
import Contact from "../../pages/contact";

function Page({ currentPage }) {
    const renderPage = () => {
        switch (currentPage.name) {
            case "about":
                return <About/>;
            case "portfolio":
                return <Portfolio/>;
            case "contact":
                return <Contact />;
            case "resume":
                return <Resume />;
            default:
                return <About />;
        }
    };

    return (
        <section>
            {renderPage()}
        </section>
    );
}

export default Page;