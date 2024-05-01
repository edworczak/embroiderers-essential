import PropTypes from "prop-types";

import { ListWrapper } from "./list.styled";

const List = ({ children, column, centerItems, scroll, numberOfColumns, maxColumns }) => {
	const columnsToGrid = (numberOfColumns) => {
		let gridColumns = "";

		for (let i = 0; i < numberOfColumns; i++) {
			gridColumns += " 1fr";
		}

		return gridColumns;
	};

	return (
		<ListWrapper
			$column={column}
			$center={centerItems}
			$scroll={scroll}
			$columnsGrid={columnsToGrid(numberOfColumns)}
			$maxColumns={maxColumns}
		>
			{children}
		</ListWrapper>
	);
};

List.propTypes = {
	children: PropTypes.node,
	scroll: PropTypes.bool,
	column: PropTypes.bool,
	centerItems: PropTypes.bool,
	numberOfColumns: PropTypes.number,
	maxColumns: PropTypes.number,
};

export default List;
