import ContactForm from "../components/contact_form";
import { usePageStyle } from "../darkMode";
import myGif from "../images/contacts/contact_design.gif";
import myGifDark from "../images/contacts/darkmode_contact.gif";
import { useContext } from "react";
import { themeContext } from "../Context";

function ContactMe() {
  const pageStyle = usePageStyle();
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;
  return (
    <div className="contact-me" style={pageStyle}>
      <div className="contact-left">
        {" "}
        <div className="contact-title">
          <h2>
            Let's Get In <span>Touch</span>
          </h2>
          <div>
            {" "}
            <p>
              Let's come together to create impactful work that transcends
              boundaries. I
              look forward to the opportunity of collaborating with you. Contact
              me, and let's transform ideas into meaningful reality.
            </p>
          </div>
        </div>
        <div className="wrap-contact">
          <div className="glass"></div>
          <div className="contact-form">
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
      <div className="contact-right">
        <img src={darkMode ? myGifDark : myGif} alt="People illustrations by Storyset" />
      </div>
    </div>
  );
}

export default ContactMe;
