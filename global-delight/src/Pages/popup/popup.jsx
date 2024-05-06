import "./popup.css"



function Popup({ POPUP,onClose }) {



  if (!POPUP) return null;

  return (
    <div className="popup">
      <div className="popup-body">
        <div className="popup-header">
        <p className="popup-p">Applying for</p>
        <h2 className="popup-h2">Spark, Scalar Developer</h2>
        <p className="popup-p-p">porduct Engneering</p>
        <button className="popup-btn-x" onClick={onClose} >X</button>
        </div>
        <hr className="popup-hr" />
        <div className="popup-in-main">
          <div className="popup-name-div">
            <input className="popup-name-in" type="text" placeholder="Your First Name" />
            <input className="popup-name-in" type="text" placeholder="your Last Name" />
          </div>
    
          <div className="popup-name-div">
            <input className="popup-name-in" type="text" placeholder="Your First Name" />
            <input className="popup-name-in" type="text" placeholder="your Last Name" />
          </div>
          <input className="popup-message" type="text" placeholder="Message" />
          <input className="popup-message-pdf" type="text`"  placeholder="Attach your resume(PDF Only)*" />
          <p className="files-p">File size of your documents should not exceed 5MB</p>
          <button className="popup-submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
