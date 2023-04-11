import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import IconButton from "../icon-button/icon-button";
import { ProjectButtonStyled, ProjectImage } from "./project-button.styled";

const ProjectButton = ({ project }) => {
  return (
    <ProjectButtonStyled>
      <ProjectImage imgURL={project.img}>
        <IconButton icon={faHourglass} />
      </ProjectImage>
      <h3>{project.name}</h3>
    </ProjectButtonStyled>
  );
};

ProjectButton.propTypes = {
  project: PropTypes.object,
};

export default ProjectButton;
