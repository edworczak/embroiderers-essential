import {faClockRotateLeft, faHourglass, faHourglassHalf, faPencil} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import IconButton from "../icon-button/icon-button";
import {
	ActionWrapper,
	ProjectButtonStyled,
	ProjectImage,
	ProjectInfoWrapper,
	ProjectTitle, ProjectTitleWrapper, Timer,
} from "./project-button.styled";
import {theme} from "../../shared-styles/theme.styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ProjectButton = ({ project }) => {
	const projectImage = project.img
		? project.img
		: new URL("../../assets/img/empty-project.jpeg", import.meta.url);

	return (
		<ProjectButtonStyled>
			<IconButton icon={faPencil} />
			<ProjectImage $projectImage={projectImage} />
			<ProjectInfoWrapper>
				<ProjectTitleWrapper>
					<ProjectTitle>{project.name}</ProjectTitle>
					<Timer><FontAwesomeIcon icon={faHourglassHalf} color={theme.colours.dark} /> {project.time}</Timer>
				</ProjectTitleWrapper>
				<ActionWrapper>
					<IconButton icon={faClockRotateLeft} text={"zacznij sesję"} border={true} />
				</ActionWrapper>
			</ProjectInfoWrapper>
		</ProjectButtonStyled>
	);
};

ProjectButton.propTypes = {
	project: PropTypes.object,
};

export default ProjectButton;
