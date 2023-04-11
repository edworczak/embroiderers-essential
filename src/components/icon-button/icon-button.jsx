import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import { theme } from "../../shared-styles/theme.styled";
import { IconButtonStyled } from "./icon-button.styled";

const IconButton = ({ icon, colour }) => {
  return (
    <IconButtonStyled>
      <FontAwesomeIcon icon={icon} color={colour || theme.colours.link} />
    </IconButtonStyled>
  );
};

IconButton.propTypes = {
  icon: PropTypes.any,
  colour: PropTypes.any,
};

export default IconButton;
