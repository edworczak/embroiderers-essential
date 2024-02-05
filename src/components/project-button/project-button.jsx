import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import IconButton from "../icon-button/icon-button";
import { ProjectButtonStyled, ProjectDates, ProjectTitle, ProjectTitleWrapper } from "./project-button.styled";

const ProjectButton = ({ project }) => {
	return (
		<ProjectButtonStyled>
			<ProjectTitleWrapper>
				<ProjectTitle>{project.name}</ProjectTitle>
				<ProjectDates>
					{project.time && <span>{project.time}</span>}
					{project.startDate && <span>{project.startDate}</span>}
					{project.finishDate && <span>{project.finishDate}</span>}
				</ProjectDates>
			</ProjectTitleWrapper>
			<div>
				<IconButton icon={faClockRotateLeft} text={"zacznij sesję"} border={true} />
			</div>
		</ProjectButtonStyled>
	);
};

ProjectButton.propTypes = {
	project: PropTypes.object,
};

export default ProjectButton;
