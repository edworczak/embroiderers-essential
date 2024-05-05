import PropTypes from "prop-types";
import Input from "../input/input";
import { SearchWrapperStyled } from "./search.styled";

const Search = ({ setState }) => {
	return (
		<SearchWrapperStyled>
			<Input label={"szukaj"} id={"search"} setState={setState}/>
		</SearchWrapperStyled>
	);
};

Search.propTypes = {
	setState: PropTypes.any,
};

export default Search;
