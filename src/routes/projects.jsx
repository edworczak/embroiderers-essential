import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

import Counter from "../components/_common/counter/counter";
import IconButton from "../components/_common/icon-button/icon-button";
import {
	HeadingPrimaryStyled,
	HeadingRowStyled,
	HeadingSecondaryStyled,
	RowContentCenteredStyled,
	RowStyled,
} from "../components/_common/layout/layout.styled";
import ProjectsList from "../components/projects-list/projects-list";
import pl from "../data/pl";

const ProjectsPage = () => {
	const openProjectsCount = useSelector((state) => state.openProjectsCount.value);
	const finishedProjectsCount = useSelector((state) => state.finishedProjectsCount.value);

	return (
		<>
			<HeadingRowStyled>
				<HeadingPrimaryStyled>{pl.projects.title}</HeadingPrimaryStyled>
				<IconButton icon={faPlus} text={"nowy projekt"} onClick={"/new-project"} />
			</HeadingRowStyled>
			<RowStyled>
				<HeadingSecondaryStyled>{pl.projects.openProjects}</HeadingSecondaryStyled>
				<ProjectsList isOpenProjects={true} />
			</RowStyled>
			<RowContentCenteredStyled $lightBackground={true}>
				<Counter counterNumber={openProjectsCount} text={pl.projects.openProjects} />
				<Counter counterNumber={finishedProjectsCount} text={pl.projects.finishedProjects} />
			</RowContentCenteredStyled>
			<RowStyled>
				<HeadingSecondaryStyled>{pl.projects.finishedProjects}</HeadingSecondaryStyled>
				<ProjectsList isFinishedProjects={true} />
			</RowStyled>
		</>
	);
};

export default ProjectsPage;
