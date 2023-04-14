import Navigation from "../components/navigation/navigation";
import { Outlet } from "react-router-dom";
import {AppWrapper, Content} from "../app/app.styled";
import React from "react";
import store from "../app/store";
import {GlobalStyles} from "../index.styled";
import {Provider} from "react-redux";

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
