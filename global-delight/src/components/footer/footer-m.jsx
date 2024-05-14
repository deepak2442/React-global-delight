import youtube from "/youtube.png"
import facebook from "/facebook (1).png"
import linkdin from "/linkedin (1).png"
import twitter from "/twitter.png"
import logo from "/GDPL-Logo.png"
import "./footer.css";
import { useState } from "react"
import dropdown from "../../assets/dropdown-1480596-1253423 (1).webp"

const Footermoblie = () => {

    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdownId) => {
        setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
      };
    
  return (
    <div id="footer-mobile">
        <footer className="footer">
       
        <div className="footer-m-m">
        
          <div className="footer-l-m">
          <div className="socialmedia-div-m">
            <div className="social-media">
            <div className="logo-div">
            <img className="logo" src={logo} alt="" />
            </div>
            </div>
              <p>Delighting the world</p>
              <div>
                <img className="social-media-logo" src={facebook} alt="" />
                <img className="social-media-logo" src={linkdin} alt="" />
                <img className="social-media-logo" src={twitter} alt="" />
                <img className="social-media-logo" src={youtube} alt="" />
              </div>
              <div>
                <button className="english-btn">English</button>
              </div>
              </div>
            <div>
              <ul className="footer-ul-m">
                <li className="footer-m-m" onClick={() =>toggleDropdown("company")}> <span className="footer-m-m-head">Company</span> <span><img className="dropdown-logo" src={dropdown} alt="" /></span> </li>
                {openDropdown=== "company" && (
                    <div>
                    <li className="footer-li">Blog</li>
                <li className="footer-li" >About us</li>
                <li className="footer-li">Press & Media</li>
                <li  className="footer-li">10 years of Boom</li>
                <li  className="footer-li">Affilate Program</li>
                    </div>
                )}
               
              </ul>
            </div>
            <div>
              <ul className="footer-ul-m">
                <li className="footer-m-m" onClick={() => toggleDropdown("products")}><span className="footer-m-m-head">Products</span>   <span><img className="dropdown-logo" src={dropdown} alt="" /></span></li>
                {
                    openDropdown ==="products" && (
                        <div>
                        <li  className="footer-li">Boom 3D (desktop)</li>
                <li  className="footer-li">Boom 2</li>
                <li  className="footer-li">Boom iOS</li>
                <li  className="footer-li">Boom Andriod</li>
                <li  className="footer-li">Capto Mac</li>
                <li  className="footer-li">Camera Plus</li>
                <li  className="footer-li">Camera Plus Pro</li>
                <li  className="footer-li">Boom Remote</li>
                <li  className="footer-li">AuDimix Windows</li>
                        </div>
                    )
                }
                
              </ul>
            </div>
            <div>
              <ul className="footer-ul-m">
                <li className="footer-m-m" onClick={() => toggleDropdown("store")}><span className="footer-m-m-head">Store</span>  <span><img className="dropdown-logo" src={dropdown} alt="" /></span></li>
                {openDropdown ==="store" && (
                    <div>
                    <li className="footer-li">Boom 3D Mac</li>
                <li className="footer-li">Boom 3D Win</li>
                <li className="footer-li">Boom 2 Mac</li>
                <li className="footer-li">Capto Mac</li>
                <li className="footer-li">AuDImx Windows</li>
                    </div>
                )}
                
              </ul>
            </div>
          

          <div className="footer-r-m">
         
           
            <div>
              <ul className="footer-ul-m">
                <li className="footer-m-m" onClick={() => toggleDropdown("support")}><span className="footer-m-m-head">Support</span>   <span><img className="dropdown-logo" src={dropdown} alt="" /></span></li>
                {
                openDropdown === "support" && (
                    <div>
                    <li  className="footer-li">Hepl-Boom 3D Windows</li>
                <li  className="footer-li">Help- Boom 3D Mac</li>
                <li  className="footer-li">Contact</li>
                <li  className="footer-li">Boom 3D Manual - Mac</li>
                <li  className="footer-li">Boom 3D manual - Windows</li>
                <li  className="footer-li">Boom 3D vs Boom 2</li>
                <li  className="footer-li">Boom 3D 5.1 Chrome Extension</li>
                <li  className="footer-li">Blog- Boom 3D</li>
                    </div>
                )
                }  
              </ul>
            </div>
          </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footermoblie