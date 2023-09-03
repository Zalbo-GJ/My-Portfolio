import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!navigator.onLine) {
      toast.error("No internet connection. Please try again later.");
      return;
    }
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
          toast.success(
            "Email sent successfully! I will be contacting you soon."
          );
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send email. Please try again later.");
        }
      );
  };
  return (
    <div className="form">
      <ToastContainer />
      <div className="form-title">
        <h3>Send me a message</h3>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div class="inputGroup">
          <input
            name="from_name"
            className="form-input"
            required
            type="text"
            autoComplete="off"
          ></input>
          <label for="name">Full Name</label>
        </div>
        <div class="inputGroup">
          <input
            name="from_email"
            className="form-input"
            required
            autoComplete="off"
            type="email"
          ></input>
          <label for="name">Email</label>
        </div>
        <div class="inputGroup message-box">
          <textarea
            name="message"
            className="form-input"
            required
            type="text"
            maxLength={200}
            autoComplete="off"
            style={{
              resize: "none",
              scrollbarWidth: "none" /* For Firefox */,
              msOverflowStyle: "none" /* For Internet Explorer and Edge */,
            }}
          ></textarea>
          <label for="name">Message</label>
        </div>
        <div className="send-button">
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
