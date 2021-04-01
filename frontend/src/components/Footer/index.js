import "./index.css";
import logo from "./logo.png";

function Footer() {
  return (
    <div id="footer-formatter">
      <div id="footer-container">
        <div id="footer-title">
          <h1>Called It</h1>
        </div>
        <div id="footer-socials">
          <a href="https://github.com/lanesmit88" className="fab fa-github"></a>
          <a
            href="https://www.linkedin.com/in/lane-smit-724291203/"
            className="fab fa-linkedin"
          ></a>
        </div>
        <div id="footer-logo">
          <img src={logo}></img>
        </div>
      </div>
    </div>
  );
}

export default Footer;
