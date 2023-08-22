import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    console.log("sent");
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_p2f8hrv",
        "template_x061c2l",
        form.current,
        "uiyuaF5gmEykqucds"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset(); // Add this line to reset the form after successful submission
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="form">
      <div className="form-title">
        <h3>Send me a message</h3>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        {" "}
        <div class="inputGroup">
          <input
            name="from_name"
            className="form-input"
            required="required"
            type="text"
          ></input>
          <label for="name">Full Name</label>
        </div>
        <div class="inputGroup">
          <input
            name="from_email"
            className="form-input"
            required="required"
            type="email"
          ></input>
          <label for="name">Email</label>
        </div>
        <div class="inputGroup message-box">
          <textarea
            name="message"
            className="form-input"
            required="required"
            type="text"
            maxLength={200}
            style={{ resize: "none" }}
          ></textarea>
          <label for="name">Message</label>
        </div>
        <div className="send-button">
          {" "}
          <button class="btn" type="submit">
            <strong>Send</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
