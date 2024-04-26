import PropTypes from "prop-types";

import { TableRowStyled } from "./table.styled";

const TableRow = ({ label, text, key }) => {
	return (
		<TableRowStyled key={key}>
			<span>{label}</span>
			<span>{text}</span>
		</TableRowStyled>
	);
};

TableRow.propTypes = {
	label: PropTypes.string,
	text: PropTypes.string,
	key: PropTypes.string,
};

export default TableRow;
