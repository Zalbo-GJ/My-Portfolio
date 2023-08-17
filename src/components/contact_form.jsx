function ContactForm() {
  return (
    <div className="form">
      <div className="form-title"><h3>Send me a message</h3></div>
      <div class="inputGroup">
        <input className="form-input" required="required" type="text"></input>
        <label for="name">Full Name</label>
      </div>
      <div class="inputGroup">
        <input className="form-input" required="required" type="email"></input>
        <label for="name">Email</label>
      </div>
      <div class="inputGroup message-box">
        <textarea
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
          <button class="btn" type="button">
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
    </div>
  );
}

export default ContactForm;
