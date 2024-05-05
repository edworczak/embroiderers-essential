import { faFloppyDisk, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewProject } from "../app/slice/user-projects";

import IconButton from "../components/_common/icon-button/icon-button";
import Input from "../components/_common/input/input";
import Heading from "../components/_common/layout/heading";
import Row from "../components/_common/layout/row";
import pl from "../data/pl";

const NewProjectPage = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState("");
	const [startDate, setStartDate] = useState("");
	const [time, setTime] = useState("");
	const [finished, setFinished] = useState(false);
	const [finishDate, setFinishDate] = useState("");
	const [hoop, setHoop] = useState("");
	const [img, setImg] = useState("");

	const todayDate = new Date().toISOString().split("T")[0];
	const id = "proj" + Math.floor(Math.random() * 10000000);

	const saveProject = () => {
		dispatch(addNewProject({
			id: id,
			name: title,
			startDate: startDate,
			time: time,
			finished: finished,
			finishDate: finished ? finishDate : "",
			hoop: hoop,
			img: img,
		}));
	}

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
				<Input label={"link do zdjęcia"} id={"image-link"} type={"url"} setState={setImg} />
			</Row>
			<Row lightBackground={true} contentToEnd={true} contentInRow={true}>
				<IconButton icon={faXmark} label={"anuluj"} onClick={"/projects"} />
				<IconButton icon={faFloppyDisk} label={"zapisz"} onClick={saveProject} />
			</Row>
		</>
	);
};

export default NewProjectPage;
