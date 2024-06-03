import React from "react";

import About from "../../pages/about";
import Portfolio from "../../pages/portfolio";
import Resume from "../../pages/resume";
import Contact from "../../pages/contact";
import PageContent from "../PageContent";


function Page({ currentPage }) {
    const renderPage = () => {
        switch (currentPage.name) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            case "Resume":
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

// import React from "react";
// import PageContent from "../PageContent";

// import About from "../../pages/about";
// import Portfolio from "../../pages/portfolio";
// import Resume from "../../pages/resume";
// import Contact from "../../pages/contact";


// function Page({ currentPage}) {
//     const renderPage = () => {
//         if(currentPage.name === "About") {
//             return<About/>
//         } 
//         else if (currentPage.name === "Portfolio") {
//             return<Portfolio/>
//         }
//         else if (currentPage.name === "Contact") {
//             return<Contact/>
//         }
//         else if (currentPage.name === "Resume") {
//             return<Resume/>
//         }
//         else {
//             return <About/>
//         }
//     }

//     return <section>
//         {renderPage()}
//     </section>
// };

// export default Page;