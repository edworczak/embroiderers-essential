import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector } from "react-redux";

import IconButton from "../components/_common/icon-button/icon-button";
import { HeadingPrimaryStyled, HeadingRowStyled, RowStyled } from "../components/_common/layout/layout.styled";
import Search from "../components/_common/search/search";
import Colour from "../components/colour/colour";
import List from "../components/list/list";
import pl from "../data/pl";

const ThreadsPage = () => {
    const threads = useSelector((state) => state.userThreads.value);
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <HeadingRowStyled $useFlex={true} $justify={"space-between"} $align={"center"}>
                <HeadingPrimaryStyled>{pl.threads.title}</HeadingPrimaryStyled>
                <IconButton icon={faPlus} label={"dodaj do zapasów"} onClick={"#"} />
            </HeadingRowStyled>
            <Search setState={setSearchTerm} />
            <RowStyled>
                {!threads && pl.threads.null}
                {threads && (
                    <List maxColumns={2}>
                        {threads.map((colour) => {
                            return (
                                <Colour
                                    colourID={colour.id}
                                    key={colour.id}
                                    noSubstitutes={true}
                                    cartCTA={true}
                                    deleteCTA={true}
                                    searchTerm={searchTerm}
                                />
                            );
                        })}
                    </List>
                )}
            </RowStyled>
        </>
    );
};

export default ThreadsPage;
