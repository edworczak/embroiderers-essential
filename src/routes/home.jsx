import { Section } from "../app/app.styled";
import ProjectsList from "../components/projects-list/projects-list";
import Welcome from "../components/welcome/welcome";
import pl from "../data/pl";
import IconButton from "../components/icon-button/icon-button";
import {faBagShopping, faBrush, faPalette, faPenRuler} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <div>
            <Section>
                <Welcome />
            </Section>
            <Section>
                <h2>{pl.openProjects}</h2>
                <ProjectsList />
            </Section>
            <Section>
                <h2>{pl.tools.tools}</h2>
                <div>
                    <IconButton icon={faBagShopping} border={true} text={pl.tools.shoppingList} width={"100%"} margin={"0 0 8px"} />
                    <IconButton icon={faPalette} border={true} text={pl.tools.palettes} width={"100%"} margin={"0 0 8px"} />
                    <IconButton icon={faPenRuler} border={true} text={pl.tools.projects} width={"100%"} margin={"0 0 8px"} />
                    <IconButton icon={faBrush} border={true} text={pl.tools.substitutes} width={"100%"} margin={"0 0 8px"} />
                </div>
            </Section>
        </div>
    );
};

export default Home;
