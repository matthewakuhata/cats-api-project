import { useEffect } from "react";
import { Box, ImageList, ImageListItem, Paper, Skeleton, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import useFetchCatImagesById from "../hooks/getCatImage";
import useFetchCatBreeds from "../hooks/getCatBreeds";

const Images = () => {
	const { breedId = '' } = useParams();
	const { state }: { state: any } = useLocation();

	const { images, loading: imageLoading, setBreedId } = useFetchCatImagesById(100);
	const { catBreeds, loading: breedLoading, setSearchString } = useFetchCatBreeds();

	useEffect(() => {
		setBreedId(breedId);
		setSearchString(state.breedName);
	}, [breedId]);

	useEffect(() => { document.title = `Cat Images`; }, []);

	return (
		<>
			<Paper sx={{ my: 2, p: 4 }}>
				{
					breedLoading ? <Skeleton animation="pulse" variant="rectangular" height={100} /> :
						<>
							<Typography variant="h4">Images of {catBreeds[0]?.name || breedId}</Typography>
							<Typography variant="body1">{catBreeds[0]?.description}</Typography>
						</>
				}
			</Paper>
			<Box>
				{
					imageLoading ? <Skeleton animation="pulse" variant="rectangular" height={1000} /> :
						<ImageList
							variant="woven"
							cols={3}
							gap={8}
							sx={{ width: "auto", zIndex: "-1", p: 3 }}
						>
							{images.map((catImage, index) => (
								<ImageListItem
									sx={{ zIndex: "inherit" }}
									key={`${index}-${catImage.id}`}
								>
									<img
										src={catImage.url}
										alt={catImage.id}
										loading="lazy"
									/>
								</ImageListItem>
							))}
						</ImageList>
				}
			</Box>
		</>
	);
};

export default Images;
