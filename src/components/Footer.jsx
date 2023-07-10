import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Prince Sen</h2>
        <p>Work hard in silence, let your success be your noise.</p>
      </div>

      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://instagram.com" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;