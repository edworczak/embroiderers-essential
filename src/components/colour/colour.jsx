import PropTypes from "prop-types";

const Colour = ({ colour }) => {
	return (
		<div>
			{colour.brand} {colour.name}
		</div>
	);
};

Colour.propTypes = {
	colour: PropTypes.object,
};

export default Colour;
