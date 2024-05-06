import { useState } from "react";
import Popup from "../popup/popup";
import "./jobGuidline.css";

const JobGuidlines = () => {
    const [popup,setPopup] = useState(false);

  return (
    <div className="guidlines">
      <h1 className="guidlines-h1">
        Spark, Scala Developer{" "}
        <span>
          <button onClick={() => setPopup(true)} className="guidlines-h1-btn">Apply now</button>
        </span>
        <Popup POPUP ={popup} onClose= {() => setPopup(false)} />
      </h1>
      <h3 className="guidlines-h3">Product Engineering</h3>
      <p className="guidlines-p">
        Experience - 4 Years <span className="guidlines-p-span">.</span> Udupi{" "}
        <span className="guidlines-p-span">.</span>Unmarried
      </p>
      <hr />

      <h2 className="guidelines-h2">Technical/Functional Skills</h2>
      <ul className="guidlines-ul">
        <li>Must have 4+ years of IT experience</li>
        <li>Must have good experience in Spark and Scala</li>
        <li>
          Good to have experience instreaming systems like Spark streaming and
          Storm
        </li>
        <li>
          Experience with Spark Data processing, Performance Tuning, Memory
          Management, Fault Tolerance, Scalability
        </li>
        <li>
          Good knowledge of Hive, Sqoop, Spark, Data warehousing and information
          management best practice
        </li>
        <li>
          Expertise in big data infrastructure, distributed systems, data
          modelling, query processing and relationa
        </li>
        <li>
          Experience with Scala - Object Orient Programming concepts (Singleton
          and Companion Object, Class, Case Class, File Handling and
          Multi-threading), Collections (Array, String, Tuple, Set, List, Map),
          Pattern Matching
        </li>
      </ul>

      <h2 className="guidelines-h2">Good to Have</h2>
      <ul className="guidlines-ul">
        <li>
          Excellent interpersonal, organizational, written communication, oral
          communication and listening skills
        </li>
        <li>Bachelor of Engineering in CS/IT/ECE stream is preferred</li>
        <li>Flexible stretching on need basis and travel to client place</li>
        <li>
          Should come up with the work estimation and should provide inputs to
          managers on resource and risk planning
        </li>
        <li>
          Ability to coordinate with SMEs, stakeholders, manage timelines,
          escalation & provide on time status
        </li>
        <li>
          Understanding of No-SQL databases (Cassandra) is desired to have, not
          mandatory
        </li>
      </ul>

      <h2 className="guidelines-h2">Roles & responsibilities</h2>
      <ul className="guidlines-ul">
        <li>Developing new user-facing features using Angular</li>
        <li>
          Developing responsive websites mobile applic ations using Javascript
          based frameworks and platforms
        </li>
        <li>
          Building reusable components and front-end libraries for future use
        </li>
        <li>Translating designs and wireframes into high quality code</li>
        <li>
          Optimizing components for maximum performance across a vast array of
          web-capable devices and browsers
        </li>
        <li>
          Work closely with back-end developers and customers to ensure an
          effective, visually appealing, functional and intuitive implementation
        </li>
      </ul>
    </div>
  );
};

export default JobGuidlines;
