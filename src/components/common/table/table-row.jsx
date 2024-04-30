import PropTypes from "prop-types";

import { TableRowStyled } from "./table.styled";

const TableRow = ({ label, text }) => {
	return (
		<TableRowStyled>
			<span>{label}</span>
			<span>{text}</span>
		</TableRowStyled>
	);
};

TableRow.propTypes = {
	label: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default TableRow;
