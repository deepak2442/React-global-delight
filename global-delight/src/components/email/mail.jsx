import "./mail.css";

const Mail = () => {
  return (
    <div className="mail">
      <div className="mail-info">
        <h1 className="mail-h1">Be in the know.</h1>
        <p className="mail-p">
          Join our mailing list to hear about updates, feature additions, and
          special deals before anyone else!
        </p>
      </div>
      <div>
        <input
          className="mail-input"
          title="lest"
          type="text"
          placeholder="xyz1234@example.com"
        />
        <button className="mail-btn">Sign me up</button>    
     
      </div>
     
    </div>
  );
};

export default Mail;
