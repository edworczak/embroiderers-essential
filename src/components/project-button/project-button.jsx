import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import CardCTA from "../card-cta/card-cta";
import {
	ProjectDates,
	ProjectTitle,
	ProjectTitleWrapper,
} from "./project-button.styled";

const ProjectButton = ({ project }) => {
	return (
		<CardCTA
			CTAs={[
				{
					key: "startSession",
					icon: faClockRotateLeft,
					text: "zacznij sesję",
				},
			]}
		>
			<ProjectTitleWrapper>
				<ProjectTitle>{project.name}</ProjectTitle>
				{project.time && <span>{project.time}</span>}
			</ProjectTitleWrapper>
			<ProjectDates>
				{project.startDate && <span>{project.startDate}</span>}
				{project.finishDate && <span>{project.finishDate}</span>}
			</ProjectDates>
		</CardCTA>
	);
};

ProjectButton.propTypes = {
	project: PropTypes.object,
};

export default ProjectButton;
