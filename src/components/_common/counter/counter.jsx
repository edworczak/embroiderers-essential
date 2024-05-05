import PropTypes from "prop-types";

import { CounterStyled } from "./counter.styled";

const Counter = ({ counterNumber, text }) => {
	return (
		<CounterStyled>
			<span>{counterNumber}</span>
			<span>{text}</span>
		</CounterStyled>
	);
};

Counter.propTypes = {
	counterNumber: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
};

export default Counter;
