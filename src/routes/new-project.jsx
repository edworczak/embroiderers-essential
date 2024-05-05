import { faFloppyDisk, faXmark } from "@fortawesome/free-solid-svg-icons";

import IconButton from "../components/_common/icon-button/icon-button";
import Input from "../components/_common/input/input";
import { HeadingRowStyled, RowContentRightStyled, RowStyled } from "../components/_common/layout/layout.styled";
import pl from "../data/pl";

const NewProjectPage = () => {
	return (
		<>
			<HeadingRowStyled $useFlex={true} $justify={"space-between"} $align={"center"}>
				<h1>{pl.projects.add}</h1>
				<IconButton icon={faXmark} label={"zamknij"} onClick={"/projects"} />
			</HeadingRowStyled>
			<RowStyled $lightBackground={true}>
				<Input label={"tytuł"} id={"title"} type={"text"} />
				<Input label={"data rozpoczęcia"} id={"start-date"} type={"date"} />
				<Input label={"haft ukończony"} id={"finished"} type={"checkbox"} />
				<Input label={"data ukończenia"} id={"finishDate"} type={"date"} />
			</RowStyled>
			<RowContentRightStyled $lightBackground={true}>
				<IconButton icon={faXmark} label={"anuluj"} onClick={"/projects"} />
				<IconButton icon={faFloppyDisk} label={"zapisz"} onClick={"/projects"} />
			</RowContentRightStyled>
		</>
	);
};

export default NewProjectPage;
