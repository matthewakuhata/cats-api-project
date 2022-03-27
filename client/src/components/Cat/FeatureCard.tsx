import { Card, CardMedia, CardContent, Divider, Typography, Skeleton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SvgIcon from "@mui/material/SvgIcon";
import { CatBreed, CatStatistic } from "../../hooks/getCatBreeds";
import useFetchCatImagesById from "../../hooks/getCatImage";
import "./styles.css";

type FeatureCatCardProps = {
	breed: CatBreed;
};

const FeatureCatCard = ({ breed }: FeatureCatCardProps) => {
	const { images } = useFetchCatImagesById(1, breed.id);

	return (
		<Card variant="outlined" sx={{ height: "550px" }}>
			{images.length ?
				<CardMedia
					component="img"
					height="300px"
					image={images[0].url}
					alt={`Image of ${breed.name}`}
				/> :
				<Skeleton variant="rectangular" animation="wave" height="300px" />
			}
			<CardContent sx={{ height: "300px" }}>
				<a className="featureCard__link" href={breed.wikipediaUrl}>
					<Typography variant="h5" component="div" sx={{ pb: "10px" }}>
						{breed.name}
					</Typography>
				</a>
				<div>
					<p className="featureCard__description">{breed.description}</p>
					<Divider
						orientation="horizontal"
						variant="middle"
						sx={{ margin: "5px" }}
						flexItem
					/>
					<BreedStatistics statistics={breed.statistics} />
				</div>
			</CardContent>
		</Card>
	);
};

const BreedStatistics = ({ statistics }: { statistics: CatStatistic }) => {
	return (
		<div>
			<StarRating stars={statistics.energyLevel} label={"Energy Level"} />
			<StarRating stars={statistics.affectionLevel} label={"Affection Level"} />
			<StarRating stars={statistics.socialNeeds} label={"Social Needs"} />
		</div>
	);
};

const StarRating = ({ stars, label }: { stars: number; label: string }) => {
	const empty = 5 - stars;

	return (
		<div>
			<label>{label}:</label>
			{[...Array(stars).fill(0)].map((val, index) => (
				<SvgIcon
					key={`star-${index}`}
					component={StarIcon}
					fontSize="small"
					sx={{ color: "gold" }}
				/>
			))}
			{[...Array(empty).fill(0)].map((val, index) => (
				<SvgIcon
					key={`empty-${index}`}
					component={StarBorderIcon}
					fontSize="small"
					sx={{ color: "gold" }}
				/>
			))}
		</div>
	);
};

export default FeatureCatCard;
