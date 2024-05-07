import PropTypes from "prop-types";

import { TableRowStyled } from "./table.styled";

const TableRow = ({ label, text, summary }) => {
    return (
        <TableRowStyled $summary={summary}>
            <span>{label}</span>
            <span>{text}</span>
        </TableRowStyled>
    );
};

TableRow.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    summary: PropTypes.bool,
};

export default TableRow;
