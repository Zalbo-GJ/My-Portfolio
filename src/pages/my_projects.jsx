import ProjectCard from "../components/project_card";
import MovieFrontImage from "../images/proj/movie_web.png";
import MovieBackImage from "../images/proj/movie_mobile.png";
import TrafficFrontImage from "../images/proj/traffic_web.png";
import TrafficBackImage from "../images/proj/traffic_mobile.png";
import RideShareFrontImage from "../images/proj/ride_1.png";
import RideShareBackImage from "../images/proj/ride_2.png";

function MyProjects() {
  return (
    <div className="my-projects">
      {" "}
      <div className="page-title">
        <h2 className="page-name">Recent Projects</h2>
      </div>
      <div className="page-desc">
        <p>
          Embarking on the journey of innovation, my expertise lies in bringing
          concepts to life through the fusion of intuitive design and expert
          coding. Here, you'll find a portfolio that showcases the tangible
          results of this approach – captivating digital experiences that
          seamlessly merge aesthetics and functionality.
        </p>
      </div>
      <div className="projects-body">
        {" "}
        <div className="project">
          {" "}
          <div className="project-title">
            <h2>Movie </h2>
            <p>
              Introducing Movie - a dynamic responsive website showcasing the
              latest movies and TV shows. This platform not only offers a
              visually captivating experience but also provides essential
              details like descriptions, ratings, stars, posters, and genres for
              each selection. Seamlessly designed with React, it ensures an
              engaging interface and smooth interactions. The website empowers
              users with a search feature, enabling easy exploration of movies
              and TV shows. Experience the fusion of design and functionality in
              this React-driven project.
            </p>
          </div>
          <div className="project-display">
            <ProjectCard
              frontImage={MovieFrontImage}
              backImage={MovieBackImage}
            ></ProjectCard>
          </div>
        </div>
        <div className="project">
          {" "}
          <div className="project-display">
            <ProjectCard
              frontImage={RideShareFrontImage}
              backImage={RideShareBackImage}
            ></ProjectCard>{" "}
          </div>
          <div className="project-title">
            <h2>RideShare</h2>
            <p>
              Introducing RideShare - Revolutionizing Transportation in
              Ethiopia Embark on a journey of innovation with RideShare, a
              groundbreaking carpooling app designed to transform commuting in
              Ethiopia. Fueled by the need for affordable and eco-friendly
              transportation options, RideShare addresses the challenges faced
              by both passengers and drivers. Traditional ride-sharing lacks
              flexibility, safety measures, and reliable pricing. Our solution?
              A comprehensive app that connects drivers and riders, offering
              convenience, sustainability, and trust
            </p>
          </div>
        </div>
        <div className="project">
          {" "}
          <div className="project-title">
            <h2>Traffic Penalty Management System</h2>
            <p>
              Introducing the Ethio-Traffic Violation Penalty System – a modern
              solution for a recurring problem. Traditional traffic violation
              systems required drivers to endure queues and manual processes to
              pay fines. Even with the advent of online systems, drivers
              struggled to track their penalty records. Our innovation, an
              integrated mobile application, revolutionizes the process. It
              combines modern technologies, efficient payment methods, and
              user-friendly features. Drivers can pay fines remotely, access
              their records, and even file complaints, streamlining the process
              and enhancing the user experience. Welcome to a new era of
              efficient traffic penalty management.
            </p>
          </div>
          <div className="project-display">
            <ProjectCard
              frontImage={TrafficFrontImage}
              backImage={TrafficBackImage}
            ></ProjectCard>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
