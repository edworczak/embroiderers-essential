import PropTypes from "prop-types";

import { ListWrapper } from "./list.styled";

const List = ({ children, column, centerItems, scroll }) => {
	return (
		<ListWrapper $column={column} $center={centerItems} $scroll={scroll}>
			{children}
		</ListWrapper>
	);
};

List.propTypes = {
	children: PropTypes.node,
	scroll: PropTypes.bool,
	column: PropTypes.bool,
	centerItems: PropTypes.bool,
};

export default List;
