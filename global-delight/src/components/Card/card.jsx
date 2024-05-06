import "./card.css"
import arrow from "../../../public/pngtree-vector-forward-icon-png-image_925823.jpg";
import codeicon from "../../../public/coding.svg"
import {Link} from "react-router-dom";


const Card = ({role}) => {
  return (
 
    <div className="employe-div">
     <Link to= "/roles">
        <h3 className="employe">
        <img className="codeicon" src={codeicon} alt="" />
        {role}
        <img className="arrow" src={arrow} alt="" /></h3> 
        </Link>  
    </div>
    
  )
}

export default Card;