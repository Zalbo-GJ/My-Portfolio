import ServiceCard from "../components/service_card";

function MyServices() {
  return (
    <div className="my-services">
      <div className="page-title">
        <h2 className="page-name">My Services</h2>
      </div>
      <div className="service-body">
        {" "}
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
        <ServiceCard></ServiceCard>
      </div>
    </div>
  );
}

export default MyServices;
