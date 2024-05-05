import { faFloppyDisk, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import IconButton from "../components/_common/icon-button/icon-button";
import Input from "../components/_common/input/input";
import Heading from "../components/_common/layout/heading";
import Row from "../components/_common/layout/row";
import pl from "../data/pl";

const NewProjectPage = () => {
	const [title, setTitle] = useState("");
	const [startDate, setStartDate] = useState("");
	const [time, setTime] = useState("");
	const [finished, setFinished] = useState(false);
	const [finishDate, setFinishDate] = useState("");
	const [hoop, setHoop] = useState("");

	const todayDate = new Date().toISOString().split("T")[0];

	return (
		<>
			<Heading title={pl.projects.add} CTA={{ label: "zamknij", icon: faXmark, onClick: "/projects" }} />
			<Row>
				<Input label={"tytuł"} id={"title"} type={"text"} setState={setTitle} />
				<Input label={"data rozpoczęcia"} id={"start-date"} type={"date"} setState={setStartDate} maxDate={todayDate} />
				<Input label={"czas pracy"} id={"time"} type={"text"} setState={setTime} />
				<Input label={"rozmiar tamborka"} id={"hoop"} type={"text"} setState={setHoop} />
				<Input label={"haft ukończony"} id={"finished"} type={"checkbox"} setState={setFinished} />
				<Input
					label={"data ukończenia"}
					id={"finishDate"}
					type={"date"}
					setState={setFinishDate}
					disabled={!finished}
					minDate={startDate}
					maxDate={todayDate}
				/>
			</Row>
			<Row lightBackground={true} contentToEnd={true} contentInRow={true}>
				<IconButton icon={faXmark} label={"anuluj"} onClick={"/projects"} />
				<IconButton icon={faFloppyDisk} label={"zapisz"} onClick={"/projects"} />
			</Row>
		</>
	);
};

export default NewProjectPage;
