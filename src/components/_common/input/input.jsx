import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";

import { theme } from "../../../shared-styles/theme.styled";
import { CheckboxStyled, InputLabelStyled, InputStyled, InputWrapperStyled } from "./input.styled";

const Input = ({ label, id, type = "text" }) => {
	const isCheckbox = type === "checkbox";
	// eslint-disable-next-line no-unused-vars
	const [value, setValue] = useState("");

	const onChange = (e) => {
		let newValue;
		if (isCheckbox) {
			newValue = e.target.checked;
		} else {
			newValue = e.target.value;
		}

		setValue(newValue);
	};

	return (
		<InputWrapperStyled $checkbox={isCheckbox}>
			<InputStyled name={id} type={type} onChange={onChange} />
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
};

export default Input;
