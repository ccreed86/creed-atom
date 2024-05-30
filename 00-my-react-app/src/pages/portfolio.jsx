import React from "react";
import "./portfolio.css";

import surielBlogPic from "../assets/suriel_blog_pic.png";
import minionManagerPic from "../assets/minion_manager_pic.png";
import taskBoardPic from "../assets/task_board_pic.png";
import classyLogoPic from "../assets/classy_logo_pic.png";
import noteTakerPic from "../assets/note_taker_pic.png";
import snapiNosqlPic from "../assets/snapi_nosql_pic.png";


function PortfolioPage() {
    return <section>
        <h1>Portfolio</h1>
        <p>Click the image to got to the GitHub Repository for each project.</p>
        
        <div>Suril Blog
        <img className="suriel-blog-img" src={surielBlogPic} alt="suriel bolg landing page"></img>
        <a href="https://github.com/ccreed86/suriel-blog">GitHub Repository</a>
        </div>

        <div>Minion Manager
        <img className="minion-manager-img" src={minionManagerPic} alt="" />
        <a href="https://github.com/ccreed86/minion-manager">GitHub Repository</a>

        {/*    pic√ */}
        </div>

        <div>Task Board
        <img className="task-board-img" src={taskBoardPic} alt="react logo" />
        <a href="https://github.com/ccreed86/task-board">GitHub Repository</a>
        </div>


        <div>Classy Logo
        <img className="classy-logo-img" src={classyLogoPic} alt="react logo" />
        <a href="https://github.com/ccreed86/classy-logo ">GitHub Repository</a>
        </div>


        <div>Note Taker
        <img className="img" src={noteTakerPic} alt="react logo" />
        <a href="https://github.com/ccreed86/note-taker">GitHub Repository</a>
        </div>

        <div>Snapi NoSQL
        <a href="https://github.com/ccreed86/snapi-nosql"><img className="snapi-nosql-img" src={snapiNosqlPic} alt="react logo" /></a>
        <a href="https://drive.google.com/file/d/1dkowgJGdgf0EMQ8pZSreaZhHqgt1V00C/view?usp=sharing">Video of demo</a>


        </div>
        </section>
}

export default PortfolioPage;