import { faClockRotateLeft, faFlagCheckered, faPencil, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import IconButton from "../../components/_common/icon-button/icon-button";
import Heading from "../../components/_common/layout/heading";
import { HeadingPrimaryStyled } from "../../components/_common/layout/layout.styled";
import Row from "../../components/_common/layout/row";
import TableBody from "../../components/_common/table/table-body";
import TableRow from "../../components/_common/table/table-row";
import Colour from "../../components/colour/colour";
import List from "../../components/list/list";
import colours from "../../data/colours";
import dummyUser from "../../data/dummyUser";
import pl from "../../data/pl";
import { theme } from "../../shared-styles/theme.styled";
import { ProjectHeader, ProjectImageWrapper } from "./project.styled";

const ProjectInfoPage = () => {
	const projects = useSelector((state) => state.userProjects.value);
	const [project, setProject] = useState("");

	const projectCost = () => {
		let allCosts = 0;

		if (project.budget && project.budget.costs) {
			project.budget.costs.forEach((cost) => {
				allCosts -= cost.cost;
			});
		}

		return allCosts;
	};

	const projectProfit = () => {
		let profit = projectCost();
		if (project.budget && project.budget.price) profit += project.budget.price;
		return profit;
	};

	useEffect(() => {
		const pageParams = new URLSearchParams(window.location.search);
		setProject(
			projects.find((project) => {
				return project.id === pageParams.get("id");
			})
		);
	});

	return (
		project && (
			<>
				<ProjectHeader $border={theme.colours.white} $useFlex={true} $background={"white"}>
					<Row lightBackground={true}>
						<HeadingPrimaryStyled>{project.name}</HeadingPrimaryStyled>
						<TableBody colourRows={true}>
							{project.startDate && <TableRow label={pl.project.start.default} text={project.startDate} />}
							{project.finishDate && <TableRow label={pl.project.finish.default} text={project.finishDate} />}
							{project.time && <TableRow label={pl.project.time.default} text={project.time} />}
							{project.hoop && <TableRow label={pl.project.hoop.default} text={project.hoop} />}
							{project.fabric && <TableRow label={pl.project.fabric.default} text={project.fabric} />}
						</TableBody>
					</Row>
					<ProjectImageWrapper $placeholderImage={!project.img}>
						<img src={project.img ? project.img : theme.decorations.defaultImages.project} alt={"Zdjęcie projektu"} />
					</ProjectImageWrapper>
				</ProjectHeader>
				<Row contentInRow={true} contentCentered={true}>
					<IconButton icon={faFlagCheckered} label={"haft ukończony"} onClick={"#"} />
					<IconButton icon={faPencil} label={"edytuj"} onClick={`/project-dialog?id=${project.id}`} />
					<IconButton icon={faClockRotateLeft} label={"zacznij sesję"} onClick={"#"} />
				</Row>
				<Row lightBackground={true}>
					<Heading
						title={pl.project.budget.default}
						secondary={true}
						CTA={{
							label: "edytuj budżet",
							icon: faPencil,
							onClick: "#",
						}}
					/>
					{project.budget && (
						<TableBody colourRows={true}>
							{project.budget.costs &&
								project.budget.costs.map((cost) => {
									return (
										<TableRow key={cost.id} label={cost.label} text={`-${cost.cost} ${dummyUser.user.currency}`} />
									);
								})}
							{project.budget.price && (
								<TableRow label={pl.project.budget.price} text={`${project.budget.price} ${dummyUser.user.currency}`} />
							)}
							{project.budget && (
								<TableRow
									summary={true}
									label={pl.project.budget.profit}
									text={`${projectProfit()} ${dummyUser.user.currency}`}
								/>
							)}
						</TableBody>
					)}
				</Row>
				<Row>
					<Heading
						title={pl.project.colourList.default}
						secondary={true}
						CTA={{ label: "dodaj kolor", icon: faPlus, onClick: "#" }}
					/>
					{project.threads ? (
						<List maxColumns={2}>
							{project.threads.map((thread) => {
								const colour = colours.find((colour) => {
									return colour.id === thread.id;
								});

								if (!colour.id) return;

								return (
									<Colour
										key={colour.id}
										colourID={colour.id}
										noSubstitutes={true}
										smallColourCard={true}
										description={thread.description}
										smallButtons={true}
										verticalCardLayout={true}
										editCTA={true}
										cartCTA={true}
									/>
								);
							})}
						</List>
					) : (
						<p>{pl.project.colourList.null}</p>
					)}
				</Row>
			</>
		)
	);
};

export default ProjectInfoPage;
