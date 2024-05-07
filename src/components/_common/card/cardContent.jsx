import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { CardContentStyled, CardInfoStyled, CardThumbnailStyled } from "./card.styled";

const CardContent = ({ children, url, thumbnail, colour, checkIcon }) => {
    const getCardContent = () => {
        return (
            <>
                {thumbnail && <CardThumbnailStyled style={{ backgroundImage: thumbnail }} />}
                {colour && (
                    <CardThumbnailStyled style={{ background: colour }}>
                        {checkIcon && (
                            <span>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                        )}
                    </CardThumbnailStyled>
                )}
                <CardInfoStyled>{children}</CardInfoStyled>
            </>
        );
    };

    return <CardContentStyled>{url ? <Link to={url}>{getCardContent()}</Link> : getCardContent()}</CardContentStyled>;
};

CardContent.propTypes = {
    children: PropTypes.node.isRequired,
    url: PropTypes.string,
    thumbnail: PropTypes.string,
    colour: PropTypes.string,
    checkIcon: PropTypes.bool,
};

export default CardContent;
