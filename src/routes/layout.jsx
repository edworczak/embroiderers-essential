import React from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

import { AppWrapper, Content } from "../app/app.styled";
import store from "../app/store";
import Navigation from "../components/navigation/navigation";
import { GlobalStyles } from "../index.styled";

const Layout = () => {
	return (
		<Provider store={store}>
			<GlobalStyles />
			<AppWrapper>
				<Navigation />
				<Content id="detail">
					<Outlet />
				</Content>
			</AppWrapper>
		</Provider>
	);
};

export default Layout;
