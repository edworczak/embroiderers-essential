import PropTypes from "prop-types";

import { ListWrapper } from "./list.styled";

const List = ({ children, maxColumns }) => {
    return <ListWrapper $maxColumns={maxColumns}>{children}</ListWrapper>;
};

List.propTypes = {
    children: PropTypes.node,
    maxColumns: PropTypes.number,
};

export default List;
