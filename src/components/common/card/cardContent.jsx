import PropTypes from "prop-types";

import { CardContentStyled, CardInfoStyled, CardThumbnailStyled } from "./card.styled";

const CardContent = ({ children, thumbnail, colour }) => {
	return (
		<CardContentStyled>
			{thumbnail && <CardThumbnailStyled style={{ backgroundImage: thumbnail }} />}
			{colour && <CardThumbnailStyled style={{ background: colour }} />}
			<CardInfoStyled>{children}</CardInfoStyled>
		</CardContentStyled>
	);
};

CardContent.propTypes = {
	children: PropTypes.node,
	thumbnail: PropTypes.string,
	colour: PropTypes.string,
};

export default CardContent;
