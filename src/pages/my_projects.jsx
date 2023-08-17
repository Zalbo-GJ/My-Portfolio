import ProjectCard from "../components/project_card";

function MyProjects() {
  return (
    <div className="my-projects">
      {" "}
      <div className="page-title">
        <h2 className="page-name">Recent Projects</h2>
      </div>
      <div className="projects-body">
        {" "}
        <div className="project">
          {" "}
          <div className="project-title">
            <h2>Netflix</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
              ipsum ipsa incidunt repellendus, voluptates harum, modi totam at
              saepe doloremque aut suscipit eos. Aliquid, voluptatum quis. Earum
              voluptatum rem aliquid.
            </p>
          </div>
          <div className="project-display">
            <ProjectCard></ProjectCard>
          </div>
        </div>
        <div className="project">
          {" "}
          <div className="project-display">
            <ProjectCard></ProjectCard>
          </div>
          <div className="project-title">
            <h2>Netflix</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
              ipsum ipsa incidunt repellendus, voluptates harum, modi totam at
              saepe doloremque aut suscipit eos. Aliquid, voluptatum quis. Earum
              voluptatum rem aliquid.
            </p>
          </div>
        </div>
        <div className="project">
          {" "}
          <div className="project-title">
            <h2>Netflix</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
              ipsum ipsa incidunt repellendus, voluptates harum, modi totam at
              saepe doloremque aut suscipit eos. Aliquid, voluptatum quis. Earum
              voluptatum rem aliquid.
            </p>
          </div>
          <div className="project-display">
            <ProjectCard></ProjectCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
