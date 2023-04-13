import { ListScrollWrapper, ListWrapper } from "./list-scroll-x.styled";

const ListScrollX = ({ children }) => {
	return (
		<ListScrollWrapper>
			<ListWrapper>{children}</ListWrapper>
		</ListScrollWrapper>
	);
};

export default ListScrollX;
