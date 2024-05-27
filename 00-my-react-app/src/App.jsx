import React, { useState } from "react";
import Footer from './componets/Footer';
import Header from './componets/Header';
import Nav from "./componets/Nav";


function App() {

  const [pages] = useState([
    {
      name: "about"
    },
    {
      name: "portfolio"
    },
    {
      name: "contact"
    },
    {
      name: "resume"
    }
  ])

  const  [currentPage, setCurrentPage] = useState(pages[0])

  return <div>
    <Header>
      <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </Header>
    <main>
    </main>
    <Footer/>
  </div>
}

export default App;
