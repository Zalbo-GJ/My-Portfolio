import myGif from "../images/ui_design.gif";
function ServiceCard() {
  return (
    <div className="service-card">
      <div className="card-content">
        {" "}
        <img src={myGif} alt="" />
        <h2>UI/UX Design</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, atque
          impedit est iste, numquam in culpa fuga praesentium a libero officia.
        </p>
      </div>
      <div class="s-card">
        <div class="bg"></div>
        <div class="blob"></div>
      </div>
    </div>
  );
}

export default ServiceCard;
