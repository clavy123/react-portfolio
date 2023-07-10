import React from "react";
import {AiOutlineMenu} from "react-icons/ai"

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent />
      </nav>
      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};
 
const NavContent = ({setMenuOpen}) => {
  return (
    <>
      <h3>Prince Sen</h3>
      <div>
        <a href="#home" onClick={() => setMenuOpen(false)} >Home</a>
        <a href="#work" onClick={() => setMenuOpen(false)} >Work</a>
        <a href="timeline" onClick={() => setMenuOpen(false)} >Experience</a>
        <a href="contact" onClick={() => setMenuOpen(false)} >Contact</a>
      </div>
    </>
  );
};

export default Header;
