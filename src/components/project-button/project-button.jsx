import { faClockRotateLeft, faPencil } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import { theme } from "../../shared-styles/theme.styled";
import CardCTA from "../card-cta/card-cta";
import TableBody from "../common/table/table-body";
import TableRow from "../common/table/table-row";
import {
	ProjectDates,
	ProjectImage,
	ProjectInfoWrapper,
	ProjectTitle,
	ProjectTitleWrapper,
} from "./project-button.styled";

const ProjectButton = ({ project }) => {
	return (
		<CardCTA
			url={`/projects/project?id=${project.id}`}
			CTAs={
				!project.finished && [
					{
						keyName: "edit",
						icon: faPencil,
						text: "edytuj projekt",
					},
					{
						keyName: "startSession",
						icon: faClockRotateLeft,
						text: "zacznij sesję",
					},
				]
			}
		>
			<ProjectImage
				style={{ backgroundImage: `url(${project.img ? project.img : theme.decorations.defaultImages.project})` }}
				$defaultImage={!project.img}
			/>
			<ProjectInfoWrapper>
				<ProjectTitleWrapper>
					<ProjectTitle>{project.name}</ProjectTitle>
				</ProjectTitleWrapper>
				<TableBody>
					{project.startDate && <TableRow label={"start"} text={project.startDate} />}
					{project.finishDate && <TableRow label={"koniec"} text={project.finishDate} />}
					{project.time && <TableRow label={"czas"} text={project.time} />}
				</TableBody>
			</ProjectInfoWrapper>
		</CardCTA>
	);
};

ProjectButton.propTypes = {
	project: PropTypes.object,
};

export default ProjectButton;
