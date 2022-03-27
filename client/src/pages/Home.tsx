import { Grid, Box, Button } from "@mui/material";
import { FeatureCard } from "../components/Cat";
import usePaginatedCatBreeds from "../hooks/getPaginatedCatBreeds";

const Home = () => {
	const { catBreeds, page, setPage } = usePaginatedCatBreeds();

	return (
		<Box sx={{ width: "100%", mt: 4, p: 2 }}>
			<Grid container rowSpacing={4} columnSpacing={4}>
				{catBreeds &&
					catBreeds.map((cat) => (
						<Grid key={cat.id} item xs={12} sm={6} md={4}>
							<FeatureCard breed={cat} />
						</Grid>
					))}
			</Grid>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					padding: "20px",
				}}
			>
				<Button
					variant="outlined"
					size="large"
					onClick={() => setPage(page + 1)}
				>
					Show More Cats
				</Button>
			</div>
		</Box>
	);
};

export default Home;
