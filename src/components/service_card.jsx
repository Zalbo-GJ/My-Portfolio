function ServiceCard({ title, description, image }) {
  return (
    <div className="service-card">
      <div className="card-content">
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div class="s-card">
        <div class="bg"></div>
        <div class="blob"></div>
      </div>
    </div>
  );
}

export default ServiceCard;
