import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Images from "./pages/Images";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="images/:breedId" element={<Images />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
