import "./job-card.css";
// import jobroles_data from "../../assets/data";
import Card from "../Card/card";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Job = () => {
  // const [jobroles, setjobRoles] = useState(jobroles_data);
  const [data, setData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [newdata,setNewData]=useState();
  // const [filtereddata,setFilteredData]=useState([data])

  function handleClick(department) {
    if (department === "All") {
      return setFilteredJobs(data);
    } else {
      console.log(department);
      const filteredroles = data.filter((job) => job.department.toLowerCase() === department.toLowerCase());
      console.log(filteredroles);
      if(filteredroles.length === 0){
        alert(" currently no jobs related to "+department);
      }
      return setFilteredJobs(filteredroles);
    }

    // setData(data);
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

  useEffect(() => {
    console.log(data, "dataa");
  }, [data]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/get/jobs/")
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // getting all dept for filtering
  function handlegetDepartment () {
    axios.get("http://localhost:5000/get/dept")
    .then(response=>{
             console.log(response.data.result,"12345");
             setNewData(response.data.result);
             console.log(newdata,"new data")
          
             
     }).catch(error=>{
         console.error("error while fetching data",error)
     })
 }


 useEffect(() => {
  handlegetDepartment ();
 }, [])
 

  // console.log(jobroles);
  return (
    <div className="role-1">
      <div className="role">
        <button className="job-btn" onClick={() => handleClick("All")}>
          All
        </button>
     { newdata && newdata.map((item)=>(
        <button onClick={() => handleClick( item.dept_name)} key={item.id}  className="job-btn">
       {item.dept_name.toLowerCase()}
     </button>

    ))}
        {/* {data.map((d) => ())} */}
        
      </div>
      <div className="employe-div-grid">
        {filteredJobs.length === 0 &&
          data.map((role, index) => (
            // <div key={index}>{role.position}</div>
            <Card
              key={index}
              id={role.id}
              role={role.position}
              type={role.department}
            />
          ))}
        {filteredJobs.length > 0 &&
          filteredJobs.map((role, index) => (
            <Card
              key={index}
              id={role.id}
              role={role.position}
              type={role.department}
            />
          ))}
      </div>
      <div className="cv">
        <h4 className="cv-h4">
          Can’t find a role you are looking for? Send us your CV tol{" "}
          <Link className="cv-link" to="/cv">
            careers@globaldelight.com
          </Link>{" "}
        </h4>
        <p className="cv-p">
          Global Delight Technologies is an equal opportunity employer and
          values diversity at the company. We do not discriminate on the basis
          of race, religion, color, national origin, gender, sexual orientation,
          age, marital status, veteran status, or disability status.
        </p>
      </div>
    </div>
  );
};

export default Job;
