import { useServiceCardStyle, useTextStyle } from "../darkMode";

function ServiceCard({ title, description, image }) {
  const textStyle = useTextStyle();
  const cardStyle = useServiceCardStyle();
  return (
    <div className="service-card">
      <div className="card-content">
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p style={{ color: textStyle.color = "#17366d" }}>{description}</p>{" "}
      </div>
      <div class="s-card" style={cardStyle}>
        <div class="bg"></div>
        <div class="blob"></div>
      </div>
    </div>
  );
}

export default ServiceCard;
