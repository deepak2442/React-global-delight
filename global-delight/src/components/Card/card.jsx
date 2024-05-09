import "./card.css"
import arrow from "../../../public/pngtree-vector-forward-icon-png-image_925823.jpg";
import codeicon from "../../../public/coding.svg"
import {Link} from "react-router-dom";
import jobroles from "../../assets/data";
import PropTypes from 'prop-types';



const Card = (props) => {
  return (
 
    <div className="employe-div">
     <Link to= {`/roles/${props.id}`}>
        <h3 className="employe">
        <img className="codeicon" src={codeicon} id={jobroles.id} name={jobroles.role} alt="" />
        {props.role}
        <img className="arrow" src={arrow} alt="" /></h3> 
        </Link>  
    </div>
    
  )
}

export default Card;

Card.propTypes={
  role:PropTypes.string.isRequired,
  id:PropTypes.number.isRequired
}