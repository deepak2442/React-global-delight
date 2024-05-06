import "./job-card.css";
import jobroles_data from "../../assets/data";
import Card from "../Card/card";
import { useState } from "react";
import {Link } from "react-router-dom";

const Job = () => {
  const [jobroles, setjobroles] = useState(jobroles_data);
  const [newData, setNewData] = useState(jobroles_data);

  function handleClick(type) {
    const filteredroles = jobroles.filter((job) => job.type === type);
    setNewData(filteredroles);
  }

  //   const array1 = [{
  //     name: 'ryal'
  //   }
  //    ,
  //     'deekshith',
  //     'deepak',
  //     'akshay'
  //   ];

  //     function filterName () {
  //       return  ( array1.filter(
  //         function cb(data) {
  //             let returnVal = data == 'ryal' || data == 'deepak';
  //             return returnVal;
  //         }
  //     ))
  //     }

  // console.log(filterName());

  console.log(jobroles);
  return (
    <div className="role-1">
      <div className="role">
        <button className="job-btn">All</button>
        <button
          onClick={() => handleClick("BusinessDevelopment")}
          className="job-btn"
        >
          {jobroles_data[8].role} (2)
        </button>
        <button onClick={() => handleClick("designer")} className="job-btn">
          Design
        </button>
        <button onClick={() => handleClick("engineer")} className="job-btn">
          Engineering (2)
        </button>
        <button onClick={() => handleClick("Advisory")} className="job-btn">
          Advisory (1)
        </button>
        <button
          onClick={() => handleClick("Communications")}
          className="job-btn"
        >
          Communications (2)
        </button>
      </div>
      <div className="employe-div-grid">
        {newData.map((role) => (
          <Card key={role.id} role={role.role} type={role.type} />
        ))}
      </div>
        <div className="cv">
            <h4 className="cv-h4">Can’t find a role you are looking for? Send us your CV tol <Link className="cv-link" to="/cv">careers@globaldelight.com</Link> </h4>
            <p className="cv-p">Global Delight Technologies is an equal opportunity employer and values diversity at the company. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.</p>
        </div>
    </div>
  );
};

export default Job;
