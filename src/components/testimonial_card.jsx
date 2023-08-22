import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
function TestimonialCard({ name, image, testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimony-profile">
        <div
          className="testimony-img"
          style={{backgroundImage: `url(${image})`}}
        ></div>
      </div>
      <div className="profile-name">
        {" "}
        <h3>{name}</h3>
      </div>
      <div className="testimony-text">
        <p>
          <BiSolidQuoteLeft className="quotes" />
          {testimonial}
          <BiSolidQuoteRight className="quotes" />
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;
