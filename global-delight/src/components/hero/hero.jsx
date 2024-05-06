import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="banner-1">
        <div className="banner-1-img-div">
          <img className="banner-1-img" src={"https://placehold.co/450x275"} alt="" />
        </div>
        <div className="banner-1-info">
          <h1 className="banner-1-h1"> <span  className="banner-span">Crafting Holistic</span> Digital Experiences</h1>
          <p className="banner-1-p">
            Our vision of simplifying lives is making an impact in the daily
            lives of millions every day, across the globe.
          </p>
          <button className="banner-1-btn">See Openings</button>
        </div>
      </div>
      <div className="work">
        <h1 >Why Work with <span className="banner-span">Us ?</span></h1>
        
      </div>
    </div>
  );
};

export default Hero;
