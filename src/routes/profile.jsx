import { HeadingPrimaryStyled, HeadingRowStyled } from "../components/_common/layout/layout.styled";
import pl from "../data/pl";

const ProfilePage = () => {
    return (
        <>
            <HeadingRowStyled>
                <HeadingPrimaryStyled>{pl.profile.title}</HeadingPrimaryStyled>
            </HeadingRowStyled>
        </>
    );
};

export default ProfilePage;
