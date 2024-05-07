import { faUser } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import IconButton from "../_common/icon-button/icon-button";
import Input from "../_common/input/input";
import Row from "../_common/layout/row";
import { LoginWrapperStyled } from "./login.styled";

const Login = ({ maxColumns }) => {
    return (
        <LoginWrapperStyled $maxColumns={maxColumns}>
            <Row>
                <h1>embroidery essential</h1>
                <Input label={"login"} id={"login"} />
                <Input label={"hasło"} id={"password"} type={"password"} />
                <IconButton icon={faUser} label={"zaloguj się"} onClick={"/home"} />
            </Row>
        </LoginWrapperStyled>
    );
};

Login.propTypes = {
    children: PropTypes.node,
    maxColumns: PropTypes.number,
};

export default Login;
