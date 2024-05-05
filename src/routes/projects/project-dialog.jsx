import { faFloppyDisk, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewProject } from "../../app/slice/user-projects";

import IconButton from "../../components/_common/icon-button/icon-button";
import Input from "../../components/_common/input/input";
import Heading from "../../components/_common/layout/heading";
import Row from "../../components/_common/layout/row";
import pl from "../../data/pl";

const ProjectDialogPage = () => {
	const userProjects = useSelector((state) => state.userProjects.value);
	const pageParams = new URLSearchParams(window.location.search).get("id");
	const [project, setProject] = useState(pageParams ? userProjects.find((project) => {
		return project.id === pageParams;
	}) : {});
	const dispatch = useDispatch();
	const [title, setTitle] = useState(project.name);
	const [startDate, setStartDate] = useState(project.startDate);
	const [time, setTime] = useState(project.time);
	const [finished, setFinished] = useState(project.finished);
	const [finishDate, setFinishDate] = useState(project.finishDate);
	const [hoop, setHoop] = useState(project.hoop);
	const [img, setImg] = useState(project.img);

	const todayDate = new Date().toISOString().split("T")[0];
	const id = "proj" + Math.floor(Math.random() * 10000000);

	useEffect(() => {
		const pageParams = new URLSearchParams(window.location.search).get("id");

		if (pageParams) {
			setProject(
				userProjects.find((project) => {
					return project.id === pageParams;
				}),
			);
		}
	});

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
				<Input label={"tytuł"} id={"title"} type={"text"} setState={setTitle} value={title} />
				<Input label={"data rozpoczęcia"} id={"start-date"} type={"date"} setState={setStartDate} value={startDate} maxDate={todayDate} />
				<Input label={"czas pracy"} id={"time"} type={"text"} setState={setTime}  value={time} />
				<Input label={"rozmiar tamborka"} id={"hoop"} type={"text"} setState={setHoop} value={hoop} />
				<Input label={"haft ukończony"} id={"finished"} type={"checkbox"} setState={setFinished} value={finished} />
				<Input
					label={"data ukończenia"}
					id={"finishDate"}
					type={"date"}
					setState={setFinishDate}
					value={finishDate}
					disabled={!finished}
					minDate={startDate}
					maxDate={todayDate}
				/>
				<Input label={"link do zdjęcia"} id={"image-link"} type={"url"} setState={setImg} value={img} />
			</Row>
			<Row lightBackground={true} contentToEnd={true} contentInRow={true}>
				<IconButton icon={faXmark} label={"anuluj"} onClick={"/projects"} />
				<IconButton icon={faFloppyDisk} label={"zapisz"} onClick={saveProject} />
			</Row>
		</>
	);
};

export default ProjectDialogPage;
