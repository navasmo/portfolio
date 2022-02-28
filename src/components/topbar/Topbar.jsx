import "./topbar.scss";
import { Phone, Mail, GitHub, LinkedIn, CloudDownload } from "@material-ui/icons";
import Button from '@material-ui/core/Button';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            mnk.
          </a>
          <div className="itemContainer">
            <Phone className="icon" />
            <span>+44 7429006011</span>
          </div>
          <Button className="itemContainer" style={{textTransform: 'none'}} href="mailto:vhnavasse@gmail.com">
            <Mail className="icon" />
            <span>vhnavasse@gmail.com</span>
          </Button>
          <Button className="itemContainer" style={{textTransform: 'none'}} href="https://github.com/navasmo" target="_blank">
            <GitHub className="icon" />
            <span>navasmo</span>
          </Button>
          <Button className="itemContainer"  style={{textTransform: 'none'}} href="https://www.linkedin.com/in/navasmo/" target="_blank">
            <LinkedIn className="icon" />
            <span>navasmo</span>
          </Button>
          <Button className="itemContainer" style={{textTransform: 'none'}} href="https://docs.google.com/document/d/1sg4oUc7RyvzX2vc4rHxzohqS61IWs9ts/edit?usp=sharing&ouid=107024906914517971505&rtpof=true&sd=true">
            <CloudDownload className="icon" />
            <span>resume</span>
          </Button>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
