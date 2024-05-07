import { HeadingPrimaryStyled, HeadingRowStyled } from "../components/_common/layout/layout.styled";
import pl from "../data/pl";

const SearchPage = () => {
    return (
        <>
            <HeadingRowStyled>
                <HeadingPrimaryStyled>{pl.search.title}</HeadingPrimaryStyled>
            </HeadingRowStyled>
        </>
    );
};

export default SearchPage;
