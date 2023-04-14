import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "../routes/layout";
import Home from "../routes/home";
import Error from "../routes/error";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="*" element={<Error />} />
			</Route>
		</Routes>
	);
};

export default App;
