import ServiceCard from "../components/service_card";
import mobileGif from "../images/services/mobile.gif";
import backEndGif from "../images/services/backEnd.gif";
import webGif from "../images/services/web.gif";

function MyServices() {
  return (
    <div className="my-services">
      <div className="page-title">
        <h2 className="page-name">My Services</h2>
      </div>
      <div className="page-desc">
        {" "}
        <p>
          Fueling innovation through intuitive design and expert coding, I
          specialize in crafting seamless digital experiences. By merging
          aesthetics with functionality, I transform concepts into captivating
          realities.
        </p>
      </div>
      <div className="service-body">
        {" "}
        <ServiceCard
          title="Front-End Development"
          description="
          Specializing in React and modern front-end tech. My blend of design finesse and functional coding delivers visually appealing digital experiences that seamlessly merge creativity and usability."
          image={webGif}
        />{" "}
        <ServiceCard
          title="Back-End Development"
          description="Specializing in .Net and Node.js, I craft backend solutions that seamlessly translate data into dynamic interactions, driving innovation."
          image={backEndGif}
        />{" "}
        <ServiceCard
          title="Mobile App Development"
          description="Specializing in Flutter, I craft intuitive mobile experiences through cross-platform app development. Merging creative design with functional coding, I bring your app vision to life with captivating results."
          image={mobileGif}
        />
      </div>
    </div>
  );
}

export default MyServices;
