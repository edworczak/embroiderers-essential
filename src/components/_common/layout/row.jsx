import PropTypes from "prop-types";

import { RowStyled } from "./layout.styled";

const Row = ({ children, lightBackground, contentInRow, contentCentered, contentToEnd }) => {
	return (
		<RowStyled
			$lightBackground={lightBackground}
			$contentInRow={contentInRow}
			$contentCentered={contentCentered}
			$contentToEnd={contentToEnd}
		>
			{children}
		</RowStyled>
	);
};

Row.propTypes = {
	children: PropTypes.node.isRequired,
	lightBackground: PropTypes.bool,
	contentInRow: PropTypes.bool,
	contentCentered: PropTypes.bool,
	contentToEnd: PropTypes.bool,
};

export default Row;
