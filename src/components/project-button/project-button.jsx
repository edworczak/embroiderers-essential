import { faClockRotateLeft, faPencil } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import { theme } from "../../shared-styles/theme.styled";
import Card from "../_common/card/card";
import { CardCTAsWrapperStyled } from "../_common/card/card.styled";
import CardContent from "../_common/card/cardContent";
import IconButton from "../_common/icon-button/icon-button";
import { ProjectTitle, ProjectTitleWrapper } from "./project-button.styled";

const ProjectButton = ({ project }) => {
	return (
		<Card alignCTAsToRight={true}>
			<CardContent
				url={`/projects/project?id=${project.id}`}
				thumbnail={`url(${project.img ? project.img : theme.decorations.defaultImages.project})`}
			>
				<ProjectTitleWrapper>
					<ProjectTitle>{project.name}</ProjectTitle>
				</ProjectTitleWrapper>
			</CardContent>
			<CardCTAsWrapperStyled>
				<IconButton icon={faPencil} label={"edytuj"} iconOnly={true} onClick={"#"} />
				{!project.finished && (
					<IconButton icon={faClockRotateLeft} label={"zacznij sesję"} iconOnly={true} onClick={"#"} />
				)}
			</CardCTAsWrapperStyled>
		</Card>
	);
};

ProjectButton.propTypes = {
	project: PropTypes.object,
};

export default ProjectButton;
