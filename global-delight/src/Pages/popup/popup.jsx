import { useEffect, useState, } from "react";
import "./popup.css";
import axios from "axios";
import propTypes from 'prop-types';

function Popup({ POPUP, onClose,position,department,id }) {
  const [postData, setpostData] = useState({

  });

  const getBlob = (file) => {
    if(file){
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
      console.log( reader.result , "reasult" );
        return reader.result
      };
    }
  }

  const [file, setfile] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(file);
    // Define the URL where you want to send the POST request
    const url = "http://localhost:5000/Add/applicant/";
    console.log(postData);
    // Make a POST request using Axios
    axios
      .post(url, {...postData , file,job_id:id})
      .then((response) => {
        // Handle success, you can access the response data in response.data
        console.log("Response:", response.data);
        setpostData({
          name: "",
          email: "",
          phone: "",
          message: "",
          resume: "",
          job_id:'',
        });
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  };

  const handleChange = (event) => {
      const { name, value } = event.target;
      setpostData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      if(event.target.type == 'file'){
        setfile(event.target.files[0])
      }
  };

  useEffect(() => {
    console.log(postData);
    console.log('file' , file);
    setfile(getBlob(file))
  }, [ postData]);

  useEffect(()=>{
    console.log(file);
  }, [file])



  if (!POPUP) return null;

  return (
    <div className="popup">
      <div className="popup-body">
        <div className="popup-header">
          <p className="popup-p">Applying for</p>
          <h2 className="popup-h2">{position.charAt(0).toUpperCase()+position.slice(1)}</h2>
          <p className="popup-p-p">{department}</p>
          <button
            className="popup-btn-x"
            onClick={onClose}
            style={{ cursor: "pointer" }}
          >
            X
          </button>
        </div>
        <hr className="popup-hr" />
        <div className="popup-in-main">
          <form onSubmit={handleSubmit} action="submit">
            <div className="popup-name-div">
              <input
                className="popup-name-in"
                name="name"
                value={postData.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                required
              />
              <input
                className="popup-name-in"
                name="email"
                value={postData.email}
                onChange={handleChange}
                type="text"
                placeholder="your Email address"
                required
              />
            </div>

            <div className="popup-name-div">
              <input
                name="phone"
                value={postData.phone}
                onChange={handleChange}
                className="popup-name-in"
                type="text"
                placeholder="Your phone number"
                required
              />
              <input
                className="popup-name-in"
                type="text"
                placeholder="your Last Name"
              />
            </div>
            <input
              className="popup-message"
              type="text"
              name="message"
              value={postData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required 

            />
            <input
              className="popup-message-pdf"
              type="file"
              name="resume"
              value={postData.resume}
              onChange={(e) => {
                console.log(e);
                handleChange(e);
              }}
              placeholder="Attach your resume(PDF Only)*"
              required
            />
            <p className="files-p">
              File size of your documents should not exceed 5MB
            </p>
            <button className="popup-submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Popup;

Popup.propTypes={
  POPUP:propTypes.string.isRequired,
  onClose:propTypes.string.isRequired,
  position:propTypes.string.isRequired,
  department:propTypes.string.isRequired,
  id:propTypes.number.isRequired
}