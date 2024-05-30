import React from "react";
import "./resume.css"

function ResumePage() {
  return (
    <section className="resume">
      <h1>Clifton Reed </h1>
      <div>
        Lompoc, CA Phone: 805-757-8792 | Email: cliftonreed1986@gmail.com
        <br />
        LinkedIn: https://www.linkedin.com/in/clifton-reed-53844619b/
        <br />
        Portfolio: https://ccreed86.github.io/cliff-portfolio/
      </div>
      <h2>Summary</h2>
      <section>
        <ul>
          <li>
            Ambitious Team Leader with a passion for creating efficient
            processes and driving business efforts.
          </li>
          <li>
            Versatile team player with proven success in customer service and
            cross-team collaboration.
          </li>
          <li>
            Nominated multiple years in a row for Best in Customer Service.
          </li>
          <li>
            WECARE Champion at Sansum Clinic Super User of Epic MRD for Sansum
            Clinic.
          </li>
          <li>Former Active Military – USMC.</li>
          <li>
            Proficient in Agile environment; flexible, fast learner bringing
            curiosity and passion to every project.
          </li>
          <li>
            Seasoned in a fast-paced and diverse team environment developing
            solutions and exceeding expectations.
          </li>
        </ul>
      </section>
      <h2>Technical Skills & Softwares/Platforms:</h2>
      <ul>
        <li>PGAdmin4</li>
        <li>GitHub</li>
        <li>GitBash</li>
        <li>VSC</li>
        <li>MongoDB</li>
        <li>Insomnia</li>
        <li>Express.js</li>

        <div>
          <h3>Software Languages:</h3>
          <li>JavaScript</li>
          <li>SQL</li>
          <li>NoSQL</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Java</li>
        </div>
      </ul>
      <sectoin>
        <h2>
            Education Program Certificate: UCBerkeley Extension, Berkeley, C.A. Completed June 10, 2024
        </h2>
        <p>
          An 18 week intensive program focused on gaining skills in Full-Stack
          Coding. Build front-end websites from scratch, as well as using
          ready-made frameworks that enable building efficiently. Create
          full-stack single-page web applications using RESTful API routes and
          AJAX methods, and describe how front-end applications communicate with
          back-end applications and databases.Implement structured and
          unstructured databases to convert static websites into dynamic
          websites that persist data. Build communication skills and demonstrate
          the foundational computer-science knowledge that is required during
          technical interviews. Apply the accepted and standard basics of social
          coding—including source control, issue tracking, and functional
          feedback—as part of a development community, while building an
          application. Demonstrate strong teamwork and project management skills
          as a collaborator and independent contributor during the development
          cycle of complex projects.
        </p>
        
        <h2>Additional Experience</h2>
        
        <h3>Lyft | Self Employment | May 2023 - Present</h3>
        <p>
          Rideshare driver for Santa Barbara County Monitor drive requests in mobile application.
          <br />
          Arrive promptly to pick up passengers.
          <br />
          Navigate passengers safely to their destination while maintaining a pleasant atmosphere.
          <br />
          Maintain cleanliness of vehicle as well as regular maintenance
        </p>
        
        <h3>Ridley Tree Cancer Center | Beverly Toole | June 2019-May 2023</h3>
        <p>
          Front Office Supervisor - Radiation Oncology Effective in handling office and administrative tasks within busy, multi-department, multi-physician practices. 
          <br />
          Expedient in processing patient check-in/check-out, verifying insurance, creating charts for new patients.
          <br />
          Efficient in managing appointment scheduling for multi-specialty department, multiple locations.
          <br />
          Adheres to HIPPA Guidelines and best practices Confidently relays instructions and guidance to team and Patients.
          <br />
        </p>
        <h3>
          Quality Roofing Inc. Santa Barbara | Eddie Lopez | June 2018-2019
        </h3>
        <p>
          Laborer Lifting up to 100 pounds regularly throughout the day Hauling Trash, shingles and other roofing materials and tools.
          <br />
          Prepping Workstations, use of power tools and Basic Knowledge of Roofing
          <br />
        </p>
        <h3>
          {" "}
          The Secret Ingredient | Chef Brenda Simon | June 2018-October 2018
        </h3>
        <p>
          Part Time Catering Kitchen Prep Catering Events, food, and beverage.
          <br />
          Keeping workspace clean, stocked, up to date with no expired goods.
          <br />
          Maintaining OSHA standards
          <br />
        </p>
        <h3>
          Valle Verde Continuing Care Campus | Jim Craddack | May 2015-January 2018
        </h3>
        <p>
          Lead Wait Staff/Supervisor Catering Events, food, and beverage.
          <br />
          Keeping record books in good order and compliant with OSHA standards.
          <br />
          Supervision and Training of dining team.
          <br />
          Member of emergency action team for earthquake, power outage, fire and flood.
        </p>
      </sectoin>
      <div className="resumeDl" >Download a copy of my Resume <a href="https://docs.google.com/document/d/1bPPeOlcOuVBcOcZNzVLIYrUp75BE6hsdBnToIv_MKIo/edit?usp=sharing">here</a></div>
    </section>
  );
}

export default ResumePage;
