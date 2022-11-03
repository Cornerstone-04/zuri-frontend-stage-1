import React from "react";
import { useState } from "react";

const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div>
      <header>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </header>

      {/* contact form */}
      <form>
        <section>
          <div>
            <label htmlFor="first_name">First Name</label>
            <input type="text" name="first_name" id="first_name" />
          </div>
          <div>
            <label htmlFor="last_name">Last Name</label>
            <input type="text" name="last_name" id="last_name" />
          </div>
        </section>
        <section>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </section>
        <section>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </section>
        <section>
          <input type="checkbox" name="check_box" id="check_box" />
          <label htmlFor="check_box">
            You agree to providing your data to Cornerstone who may contact you.
          </label>
        </section>

        <button>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
