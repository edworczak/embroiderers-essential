import { Outlet } from "react-router-dom";

import { Content } from "../../app/app.styled";
import Navigation from "../../components/navigation/navigation";
import Layout from "./layout";

const LoggedLayout = () => {
    return (
        <Layout>
            <Navigation />
            <Content id="detail">
                <Outlet />
            </Content>
        </Layout>
    );
};

export default LoggedLayout;
