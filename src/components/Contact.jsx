import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <section>
        <form>
          <h2>Contact Me</h2>
          <input
            type="text"
            placeholder="Your Name"
          />
          <input
            type="email"
            placeholder="Your Email"
          />
          <input
            type="text"
            placeholder="Your Message"
          />

          <button
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;