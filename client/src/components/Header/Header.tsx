import { useState } from "react";
import { AppBar, Box, Toolbar, Typography, Button, IconButton, ButtonGroup, } from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { SearchBar } from "../SearchBar";
import catLogo from "../../cat.png";

const PAGES = [
	{ label: "Home", link: "/" },
	{ label: "Images", link: "/images/random" },
];

const Header = () => {
	const [showSearchBox, setSearchBox] = useState(false);

	const onBlurSearchBar = () => {
		setSearchBox(false);
	};

	return (
		<Box sx={{ flexGrow: 1, top: 0, position: "sticky" }}>
			<AppBar
				position="sticky"
				sx={{ top: 0, backgroundColor: "rgb(255,255,255,0.8)", color: "black" }}
			>
				<Toolbar sx={{ ml: "10px" }}>
					<img alt={"Black Cat"} src={catLogo} style={{ height: "50px" }} />
					<Typography variant="h5">All The Cats</Typography>

					<ButtonGroup sx={{ flexGrow: 1, mx: "20px" }}>
						{PAGES.map((page) => (
							<Link to={page.link} key={page.label}>
								<Button
									key={page.label}
									variant="text"
									size="large"
									sx={{ my: 2, color: "black", display: "block" }}
								>
									{page.label}
								</Button>
							</Link>
						))}
					</ButtonGroup>

					<IconButton
						size="large"
						edge="start"
						color="inherit"
						onClick={() => setSearchBox(!showSearchBox)}
					>
						<SearchIcon />
					</IconButton>
					{showSearchBox && <SearchBar onBlur={onBlurSearchBar} />}
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
