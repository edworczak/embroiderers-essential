import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { CardContentStyled, CardInfoStyled, CardThumbnailStyled } from "./card.styled";

const CardContent = ({ children, url, thumbnail, colour }) => {
	const getCardContent = () => {
		return (
			<>
				{thumbnail && <CardThumbnailStyled style={{ backgroundImage: thumbnail }} />}
				{colour && <CardThumbnailStyled style={{ background: colour }} />}
				<CardInfoStyled>{children}</CardInfoStyled>
			</>
		);
	};

	return <CardContentStyled>{url ? <Link to={url}>{getCardContent()}</Link> : getCardContent()}</CardContentStyled>;
};

CardContent.propTypes = {
	children: PropTypes.node,
	url: PropTypes.string,
	thumbnail: PropTypes.string,
	colour: PropTypes.string,
};

export default CardContent;
