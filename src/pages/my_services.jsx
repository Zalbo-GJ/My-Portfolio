import ServiceCard from "../components/service_card";
import uxGif from "../images/ui_design.gif";

function MyServices() {
  return (
    <div className="my-services">
      <div className="page-title">
        <h2 className="page-name">My Services</h2>
      </div>
      <div className="service-body">
        {" "}
        <ServiceCard
          title="Front-End Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          image={uxGif}
        />{" "}
        <ServiceCard
          title="Back-End Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          image={uxGif}
        />{" "}
        <ServiceCard
          title="UI/UX Design"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          image={uxGif}
        />
      </div>
    </div>
  );
}

export default MyServices;
