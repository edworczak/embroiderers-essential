import PropTypes from "prop-types";

import { TableBodyStyled } from "./table.styled";

const TableBody = ({ children, colourRows }) => {
	return <TableBodyStyled $colourRows={colourRows}>{children}</TableBodyStyled>;
};

TableBody.propTypes = {
	children: PropTypes.node,
	colourRows: PropTypes.bool,
};

export default TableBody;
