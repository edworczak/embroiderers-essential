import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import IconButton from "../icon-button/icon-button";
import {
	ProjectButtonStyled,
	ProjectImage,
	ProjectInfoWrapper,
	ProjectTitle,
} from "./project-button.styled";

const ProjectButton = ({ project }) => {
	const projectImage = project.img
		? project.img
		: new URL("../../assets/img/empty-project.jpeg", import.meta.url);

	return (
		<ProjectButtonStyled>
			<ProjectImage $projectImage={projectImage} />
			<ProjectInfoWrapper>
				<ProjectTitle>{project.name}</ProjectTitle>
				<IconButton icon={faHourglass} text={"zacznij sesję"} border={true} />
			</ProjectInfoWrapper>
		</ProjectButtonStyled>
	);
};

ProjectButton.propTypes = {
	project: PropTypes.object,
};

export default ProjectButton;
