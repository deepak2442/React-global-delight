
import youtube from "/youtube.png"
import facebook from "/facebook (1).png"
import linkdin from "/linkedin (1).png"
import twitter from "/twitter.png"
import logo from "/GDPL-Logo.png"
import "./footer.css"

const Footer = () => {
  return (
    <div>
    <hr />
      <footer>
        <div className="footer">
          <div className="footer-l">
            <div>
              <ul className="footer-ul">
                <li className="footer-m">Company </li>
                <li className="footer-li">Blog</li>
                <li className="footer-li" >About us</li>
                <li className="footer-li">Press & Media</li>
                <li  className="footer-li">10 years of Boom</li>
                <li  className="footer-li">Affilate Program</li>
              </ul>
            </div>
            <div>
              <ul className="footer-ul">
                <li className="footer-m">Products</li>
                <li  className="footer-li">Boom 3D (desktop)</li>
                <li  className="footer-li">Boom 2</li>
                <li  className="footer-li">Boom iOS</li>
                <li  className="footer-li">Boom Andriod</li>
                <li  className="footer-li">Capto Mac</li>
                <li  className="footer-li">Camera Plus</li>
                <li  className="footer-li">Camera Plus Pro</li>
                <li  className="footer-li">Boom Remote</li>
                <li  className="footer-li">AuDimix Windows</li>
              </ul>
            </div>
            <div>
              <ul className="footer-ul">
                <li className="footer-m">Store</li>
                <li className="footer-li">Boom 3D Mac</li>
                <li className="footer-li">Boom 3D Win</li>
                <li className="footer-li">Boom 2 Mac</li>
                <li className="footer-li">Capto Mac</li>
                <li className="footer-li">AuDImx Windows</li>
              </ul>
            </div>
          </div>

          <div className="footer-r">
            <div className="social-media">
            <div className="logo-div">
            <img className="logo" src={logo} alt="" />
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
              <ul className="footer-ul">
                <li className="footer-m">Support</li>
                <li  className="footer-li">Hepl-Boom 3D Windows</li>
                <li  className="footer-li">Help- Boom 3D Mac</li>
                <li  className="footer-li">Contact</li>
                <li  className="footer-li">Boom 3D Manual - Mac</li>
                <li  className="footer-li">Boom 3D manual - Windows</li>
                <li  className="footer-li">Boom 3D vs Boom 2</li>
                <li  className="footer-li">Boom 3D 5.1 Chrome Extension</li>
                <li  className="footer-li">Blog- Boom 3D</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-f">
        <div className="footerlogo-f">
          <img src={facebook} alt="" />
          <img src={linkdin} alt="" />
          <img src={twitter} alt="" />
          <img src={youtube} alt="" />
        </div>
        <div className="footer-f-p">
          <p className="privacy">privacy</p>
          <p className="Contact">Contact</p>
        </div>
        <p className="trademarks-p">
          © 2008 - 2021 Global Delight Technologies Pvt. Ltd.| All trademarks
          registered to their respective companies
        </p>
      </div>
    </div>
  );
};

export default Footer;
