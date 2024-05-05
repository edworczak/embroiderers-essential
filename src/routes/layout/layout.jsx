import PropTypes from "prop-types";
import { Provider } from "react-redux";

import { AppWrapper } from "../../app/app.styled";
import store from "../../app/store";
import { GlobalStyles } from "../../index.styled";

const Layout = ({ children }) => {
	return (
		<Provider store={store}>
			<GlobalStyles />
			<AppWrapper>
				{children}
			</AppWrapper>
		</Provider>
	);
};

Layout.propTypes = {
	children: PropTypes.node,
}

export default Layout;
