import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Paper } from "@mui/material";

function Layout() {
	// const d = [...Array(1)].map();
	return (
		<>
			<Header />
			<Outlet />
			<footer>
				<Paper sx={{ p: 2, bottom: 0, height: "50px", position: "relative", backgroundColor: "rgb(193,121,185,0.5)" }}>
					<p>Author: Matthew Akuhata<br /></p>
				</Paper>
			</footer>
		</>
	);
}

export default Layout;
