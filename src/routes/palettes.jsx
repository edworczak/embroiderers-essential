import { HeadingPrimaryStyled, HeadingRowStyled, RowStyled } from "../components/_common/layout/layout.styled";
import pl from "../data/pl";

const PalettesPage = () => {
    return (
        <>
            <HeadingRowStyled>
                <HeadingPrimaryStyled>{pl.palettes.title}</HeadingPrimaryStyled>
            </HeadingRowStyled>
            <RowStyled>
                <p>{pl.palettes.null}</p>
            </RowStyled>
        </>
    );
};

export default PalettesPage;
