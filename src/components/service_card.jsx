import myGif from '../images/ui_design.gif';
function ServiceCard() {
  return (
    <div className="service-card">
      <div className="card-content">
        {" "}
        <img src={myGif} alt="" />
        <h1>hello</h1>
      </div>
      <div class="card">
        <div class="bg"></div>
        <div class="blob"></div>
      </div>
    </div>
  );
}

export default ServiceCard;
