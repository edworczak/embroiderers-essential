import { faClockRotateLeft, faHourglassHalf, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import { theme } from "../../shared-styles/theme.styled";
import IconButton from "../icon-button/icon-button";
import {
	ProjectButtonStyled,
	ProjectImage,
	ProjectInfoWrapper,
	ProjectTitle,
	ProjectTitleWrapper,
	Timer,
} from "./project-button.styled";

const ProjectButton = ({ project }) => {
	const projectImage = project.img ? project.img : new URL("../../assets/img/empty-project.jpeg", import.meta.url);

	return (
		<ProjectButtonStyled>
			<IconButton icon={faPencil} />
			<ProjectImage $projectImage={projectImage} />
			<ProjectInfoWrapper>
				<ProjectTitleWrapper>
					<ProjectTitle>{project.name}</ProjectTitle>
					<Timer>
						<FontAwesomeIcon icon={faHourglassHalf} color={theme.colours.dark} /> {project.time}
					</Timer>
				</ProjectTitleWrapper>
				<div>
					<IconButton icon={faClockRotateLeft} text={"zacznij sesję"} border={true} />
				</div>
			</ProjectInfoWrapper>
		</ProjectButtonStyled>
	);
};

ProjectButton.propTypes = {
	project: PropTypes.object,
};

export default ProjectButton;
