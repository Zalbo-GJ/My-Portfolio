import ContactForm from "../components/contact_form";
import myGif from "../images/contact_design.gif";
function ContactMe() {
  return (
    <div className="contact-me">
      <div className="contact-left">
        {" "}
        <div className="contact-title">
          <h2>
            Let's Get In <span>Touch</span>
          </h2>
          <div>
            {" "}
            <p>
              Let's Get Together and make a meaningful work Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quasi officiis distinctio
              explicabo, voluptatem aliquam natus. Quidem, 
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
        <img src={myGif} alt="" />
      </div>
    </div>
  );
}

export default ContactMe;
