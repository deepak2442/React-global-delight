import { useEffect, useState } from "react";
import axios from "axios";
import Popup from "../popup/popup";
import "./jobGuidline.css";
import { useParams } from "react-router";

const JobGuidlines =  () => {
    const [popup,setPopup] = useState(false);
    const [data,setData] = useState([]);
    const {id} = useParams();

    useEffect(() => {
      // Scroll to the top of the page when the component mounts
      window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
      
    axios.get(`http://localhost:5000/getbyId/${id}`)
      .then(response => {
        // const { profileInformation } = response.data.newResults;
        setData(response.data.data);
        console.log(response.data.data,"this is row data");
  
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    }, [])

  //  console.log(data.profileInformation,"ss")
    // console.log(id)

   

      // const filterdata = data.filter((id) => (id == data.id));
      // console.log(filterdata,"ftghnjmkmmjhygtftgbhnj")
      // const {profileInformation}=data[-1];
      // console.log(profileInformation);

  return (
    <div className="guidlines">
      <h1 className="guidlines-h1">
     {data.length && data[0].position.charAt(0).toUpperCase()+data[0].position.slice(1)}
        <span>
          <button onClick={() => setPopup(true)} className="guidlines-h1-btn" style={{cursor:"pointer"}}>Apply now</button>
        </span>
        <Popup id={id} POPUP ={popup} position={data.length && data[0].position} department={data.length && data[0].department} onClose= {() => setPopup(false)}  />
      </h1>
     <h1> {data.length && data[0].department.charAt(0).toUpperCase()+data[0].department.slice(1,)}</h1>
      <p className="guidlines-p">
        Experience - {data.length && data[0].experience} year&apos;s<span className="guidlines-p-span">&gt;</span> {data.length && data[0].location}
        <span className="guidlines-p-span">&gt;</span>{data.length && data[0].jobType}
        

      </p>
      <hr className="jobguidelines-hr" />
    
   

    
        {/* <li>{(data.length && data.profileInformation.content)}</li> */}
      
        {/* <li>
        {profileInformation && (
    profileInformation.map((item, index) => (
        <li key={index}>
            <h3>{item.heading}</h3>
            <ul>
                {item.content.map((content, contentIndex) => (
                    <li key={contentIndex}>{content}</li>
                ))}
            </ul>
        
        </li>
    ))
)}

            </li> */}

{data.length && Array.isArray(data[0].profileInformation) && data[0].profileInformation.map((item, index) => (
    <div key={index}>
        <h2 className="guidelines-h2">{item.heading}</h2>
        
        <ul className="guidlines-ul">
            {item.content.map((content,index) => (
                <li key={index}>{content}</li>
            ))}
        </ul>
    </div>
))}
      
    

     
    </div>
  );
};

export default JobGuidlines;
