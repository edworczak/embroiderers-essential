import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import { theme } from "../../../shared-styles/theme.styled";
import { CheckboxStyled, InputLabelStyled, InputStyled, InputWrapperStyled } from "./input.styled";

const Input = ({ label, id, type = "text", value, setState, disabled, minDate, maxDate }) => {
	const isCheckbox = type === "checkbox";

	const onChange = (e) => {
		let newValue;

		if (isCheckbox) {
			newValue = e.target.checked;
		} else {
			newValue = e.target.value;
		}

		setState(newValue);
	};

	return (
		<InputWrapperStyled $checkbox={isCheckbox}>
			<InputStyled checked={isCheckbox && value} value={value} name={id} type={type} onChange={onChange} disabled={disabled} min={minDate} max={maxDate} />
			{isCheckbox && (
				<CheckboxStyled>
					<FontAwesomeIcon icon={faCheck} color={theme.colours.CTA} />
				</CheckboxStyled>
			)}
			<InputLabelStyled htmlFor={id}>{label}</InputLabelStyled>
		</InputWrapperStyled>
	);
};

Input.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.bool,
	]),
	setState: PropTypes.func,
	disabled: PropTypes.bool,
	minDate: PropTypes.string,
	maxDate: PropTypes.string,
};

export default Input;
