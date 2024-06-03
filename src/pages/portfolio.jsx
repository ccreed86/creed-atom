import React from "react";
import "./portfolio.css";

import surielBlogPic from "../assets/suriel_blog_pic.png";
import minionManagerPic from "../assets/minion_manager_pic.png";
import taskBoardPic from "../assets/task_board_pic.png";
import classyLogoPic from "../assets/classy_logo_pic.png";
import noteTakerPic from "../assets/note_taker_pic.png";
import snapiNosqlPic from "../assets/snapi_nosql_pic.png";

function PortfolioPage() {
  return (
    <section className="projects">
      <h1>Portfolio</h1>
      <h6>
        <em>
          Click the image to got to the GitHub Repository for each project.
        </em>
      </h6>

      <div className="suril">
        <h3>Suril Blog</h3>
        <br></br>
        <a href="https://github.com/ccreed86/suriel-blog">
          <img
            className="suriel-blog-img"
            src={surielBlogPic}
            alt="suriel bolg landing page"
          ></img>
        </a>
        <a href="https://ccreed86.github.io/suriel-blog/">
          Deployed via GitHub
        </a>
      </div>

      <div>
        <h3>Minion Manager</h3>
        <br></br>
        <a href="https://github.com/ccreed86/minion-manager">
          <img className="minion-manager-img" src={minionManagerPic} alt="" />
        </a>
        <a href="https://drive.google.com/file/d/1tlBLHlNOewO2oMyM_bFtmrq3AaSCgkoN/view?usp=sharing">
          Video Demo
        </a>
      </div>

      <div>
        <h3>Task Board</h3>
        <a href="https://github.com/ccreed86/task-board">
          <img className="task-board-img" src={taskBoardPic} alt="react logo" />
        </a>
        <a href="https://ccreed86.github.io/task-board/">Deployed via Github</a>
      </div>

      <div>
        <h3>Classy Logo</h3>
        <a href="https://github.com/ccreed86/classy-logo ">
          <img
            className="classy-logo-img"
            src={classyLogoPic}
            alt="react logo"
          />
        </a>
        <a href="https://drive.google.com/file/d/1FXak_1Aytrb8g387lH9OTGuOBEkCKyAu/view">
          Video Demo
        </a>
      </div>

      <div>
        <h3>Note Taker</h3>
        <a href="https://github.com/ccreed86/note-taker">
          <img className="img" src={noteTakerPic} alt="react logo" />
        </a>
        <a href="https://note-taker-35j8.onrender.com">Delployed via Render</a>
      </div>

      <div>
        <h3>Snapi NoSQL</h3>
        <a href="https://github.com/ccreed86/snapi-nosql">
          <img
            className="snapi-nosql-img"
            src={snapiNosqlPic}
            alt="react logo"
          />
        </a>
        <a href="https://drive.google.com/file/d/1dkowgJGdgf0EMQ8pZSreaZhHqgt1V00C/view?usp=sharing">
          Video of demo
        </a>
      </div>
    </section>
  );
}

export default PortfolioPage;
