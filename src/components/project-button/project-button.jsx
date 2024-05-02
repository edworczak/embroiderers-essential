import { faClockRotateLeft, faPencil } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import { theme } from "../../shared-styles/theme.styled";
import Card from "../common/card/card";
import { CardCTAsWrapperStyled } from "../common/card/card.styled";
import CardContent from "../common/card/cardContent";
import IconButton from "../icon-button/icon-button";
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
				<IconButton icon={faPencil} text={"edytuj"} iconOnly={true} />
				{!project.finished && <IconButton icon={faClockRotateLeft} text={"zacznij sesję"} iconOnly={true} />}
			</CardCTAsWrapperStyled>
		</Card>
	);
};

ProjectButton.propTypes = {
	project: PropTypes.object,
};

export default ProjectButton;
