function ProjectCard({frontImage, backImage}) {
  return (
    <div className="project-card">
      <div className="p-card">
        <div className="card-inner">
          <div
            className="card-front"
            style={{ backgroundImage: `url(${frontImage})` }}
          ></div>
          <div
            className="card-back"
            style={{ backgroundImage: `url(${backImage})` }}kim
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
