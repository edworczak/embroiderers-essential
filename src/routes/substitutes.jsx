import { useState } from "react";

import Heading from "../components/_common/layout/heading";
import { RowStyled } from "../components/_common/layout/layout.styled";
import Search from "../components/_common/search/search";
import Colour from "../components/colour/colour";
import List from "../components/list/list";
import colours from "../data/colours";
import pl from "../data/pl";

const SubstitutesPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <Heading title={pl.substitutes.title} />
            <Search setState={setSearchTerm} />
            <RowStyled>
                <List maxColumns={2}>
                    {colours.map((colour) => {
                        return (
                            <Colour
                                colourID={colour.id}
                                key={`substitutes-list-item-${colour.id}`}
                                collectionCTA={true}
                                cartCTA={true}
                                smallButtons={true}
                                showSubstitutes={true}
                                searchTerm={searchTerm.toLowerCase()}
                            />
                        );
                    })}
                </List>
            </RowStyled>
        </>
    );
};

export default SubstitutesPage;
