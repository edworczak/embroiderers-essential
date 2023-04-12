import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import IconButton from "../icon-button/icon-button";
import {
  ProjectButtonStyled,
  ProjectImage,
  ProjectTitle,
} from "./project-button.styled";

const ProjectButton = ({ project }) => {
  const BG = project.img
    ? project.img
    : new URL("../../assets/img/empty-project.jpeg", import.meta.url);

  return (
    <ProjectButtonStyled>
      <ProjectImage imgURL={BG}>
        <IconButton icon={faHourglass} />
      </ProjectImage>
      <ProjectTitle>{project.name}</ProjectTitle>
    </ProjectButtonStyled>
  );
};

ProjectButton.propTypes = {
  project: PropTypes.object,
};

export default ProjectButton;
