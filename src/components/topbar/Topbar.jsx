import "./topbar.scss";
import { Person, Mail, GitHub, LinkedIn } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            mnk.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+44 7429006011</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>vhnavasse@gmail.com</span>
          </div>
          <div className="itemContainer">
            <GitHub className="icon" />
            <span>navasmo</span>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <span>navasmo</span>
          </div>
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
