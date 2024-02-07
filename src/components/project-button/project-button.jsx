import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import IconButton from "../icon-button/icon-button";
import {
	ProjectButtonWrapper,
	ProjectCTAWrapper,
	ProjectDates, ProjectInfoWrapper,
	ProjectTitle,
	ProjectTitleWrapper,
} from "./project-button.styled";

const ProjectButton = ({ project }) => {
	return (
		<ProjectButtonWrapper>
			<ProjectInfoWrapper>
				<ProjectTitleWrapper>
					<ProjectTitle>{project.name}</ProjectTitle>
					{project.time && <span>{project.time}</span>}
				</ProjectTitleWrapper>
				<ProjectDates>
					{project.startDate && <span>{project.startDate}</span>}
					{project.finishDate && <span>{project.finishDate}</span>}
				</ProjectDates>
			</ProjectInfoWrapper>
			{!project.finishDate && <ProjectCTAWrapper>
				<IconButton icon={faClockRotateLeft} text={"zacznij sesję"} border={true} />
			</ProjectCTAWrapper>}
		</ProjectButtonWrapper>
	);
};

ProjectButton.propTypes = {
	project: PropTypes.object,
};

export default ProjectButton;
