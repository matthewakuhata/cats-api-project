import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import useFetchCatBreeds from "../../hooks/getCatBreeds";
import { Link } from "react-router-dom";
import "./styles.css";

type searchBarProps = {
	onBlur: () => void,
};

const SearchBar = ({ onBlur }: searchBarProps) => {
	const { loading, catBreeds, setSearchString } = useFetchCatBreeds(5);
	const handleOnBlur = () => {
		setTimeout(() => onBlur(), 150);
	};

	return (
		<div>
			<TextField
				sx={{ width: "400px" }}
				autoFocus
				label="Search for Breeds"
				variant="outlined"
				onBlur={handleOnBlur}
				onChange={(event) => setSearchString(event.target.value.trim())}
			/>
			{
				loading ?
					<div className="searchBar__dropdown">
						<Typography variant="body1" className="searchItem__text">Searching for breeds...</Typography>
					</div>
					:
					<div className="searchBar__dropdown">
						{
							catBreeds.length ?
								catBreeds.map((breed => (
									<div key={breed.id} className="searchItem__container">
										<Link className="searchItem__link" to={`images/${breed.id}`} state={{ breedName: breed.name }} >
											<Typography variant="h6">{breed.name}</Typography>
											<Typography variant="body1" className="searchItem__description">{breed.description}</Typography>
										</Link>
									</div>
								)))
								:
								<Typography variant="body1" className="searchItem__text">No cat breeds found</Typography>
						}
					</div>
			}
		</div>
	);
};

export default SearchBar;
