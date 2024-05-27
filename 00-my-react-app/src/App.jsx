import React, { useState } from "react";
import Footer from './componets/Footer';
import Header from './componets/Header';
import Nav from "./componets/Nav";
import Page from "./componets/Page";


function App() {

  const [pages] = useState([
    {
      name: "About"
    },
    {
      name: "Portfolio"
    },
    {
      name: "Contact"
    },
    {
      name: "Resume"
    }
  ])

  const  [currentPage, setCurrentPage] = useState(pages[0])

  return <div>
    <Header>
      <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </Header>
    <main>
      <Page currentPage={currentPage}></Page>
    </main>
    <Footer/>
  </div>
}

export default App;
