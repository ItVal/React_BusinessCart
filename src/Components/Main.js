import ValImg from "../Val.jpeg";
import Twitter from "../icon-twitter.svg";
import Facebook from "../icon-facebook.svg";
import Instagram from "../icon-instagram.svg";
import Pinsterest from "../icon-pinterest.svg";
import Mail from "../mail.svg";
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
          <ul>
          <img src={Twitter} alt="logoReact" width="7%" />
          <img src={Facebook} alt="logoReact" width="7%" />
          <img src={Instagram} alt="logoReact" width="7%" />
          <img src={Pinsterest} alt="logoReact" width="7%" />
          </ul>
        </div>
      </div>
    );
  }
  export default Main;