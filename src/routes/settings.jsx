import { HeadingPrimaryStyled, HeadingRowStyled } from "../components/_common/layout/layout.styled";
import pl from "../data/pl";

const SettingsPage = () => {
    return (
        <>
            <HeadingRowStyled>
                <HeadingPrimaryStyled>{pl.settings.title}</HeadingPrimaryStyled>
            </HeadingRowStyled>
        </>
    );
};

export default SettingsPage;
