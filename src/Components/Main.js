import ValImg from "../Val.jpeg";
import Twitter from "../icons8-twitter.svg";
import Facebook from "../icons8-facebook.svg";
import Instagram from "../icons8-instagram.png";
import Linkedin from "../icons8-linkedin.svg";
import Github from "../icons8-github.svg";
import Mail from "../icons8-gmail-logo.svg";
function Main() {
    return (
      <div className="profil">
        <div className="profil_image">
        <img className="image_item" src={ValImg} alt="logoReact" />
        </div>
  
        <div className="profile_name">
          <h1>Valentin Nasibu </h1>
          <h4>Frontend Developper</h4>
          <p>irnasvalentin@gmail.com</p>
          <button>
          <img src={Mail} alt="logoReact" width="8%" /> 
          <span>Email</span> 
          </button>
        </div>
  
        <div className="profile_contents">
          <h2>About</h2>
          <p>
            I am a frontend developer with a particular interest in making things
            simple and automating daily tasks. I try to keep up with security and
            best practices, and am always looking for new things to learn.
          </p>
          <h2>Interests</h2>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
  
        <div className="profile_foot">
          
          <img className="media" src={Twitter} alt="logoReact" width="7%" />
          <img src={Facebook} alt="logoReact" width="7%" />
          <img src={Instagram} alt="logoReact" width="7%" />
          <img src={Linkedin} alt="logoReact" width="7%" />
          <img src={Github} alt="logoReact" width="7%" />
          
          
        </div>
      </div>
    );
  }
  export default Main;