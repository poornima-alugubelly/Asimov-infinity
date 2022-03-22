import "./Home.css";
import { IMAGES } from "../../assets/index";
import { Link } from "react-router-dom";
import { useProductListing } from "../../context/ProductListingContext";
import { actionTypes } from "../../reducers/actionTypes";
import { useNavigate } from "react-router-dom";
export const Home = () => {
	const navigate = useNavigate();
	const { productListingDispatch } = useProductListing();
	const {
		ACCESSORIES,
		BOOKS,
		CLOTHING,
		LIFESTYLE,

		STATIONERY,
		WALLART,
	} = actionTypes;
	const navigateHandler = (type) => {
		productListingDispatch({ type });
		navigate("/productlisting");
	};
	return (
		<div className="main-container main-container-gutter">
			<div className="catergory-container gap-l grid-6-column">
				<div
					className="img-container card-shadow-dark"
					onClick={() => navigateHandler(ACCESSORIES)}
				>
					<img
						src="https://i.etsystatic.com/27637625/r/il/18552c/3601973387/il_340x270.3601973387_go3w.jpg"
						className="img-responsive"
						alt="product image"
					/>
					<div className="text-overlay">Accessories</div>
				</div>
				<div
					className="img-container card-shadow-dark"
					onClick={() => navigateHandler(BOOKS)}
				>
					<img
						src={IMAGES.duneBookCover}
						className="img-responsive"
						alt="product image"
					/>
					<div className="text-overlay">Books</div>
				</div>
				<div
					className="img-container card-shadow-dark"
					onClick={() => navigateHandler(CLOTHING)}
				>
					<img
						src="https://d1x7zurbps6occ.cloudfront.net/product/large/994811-299256.jpg"
						className="img-responsive"
						alt="product image"
					/>
					<div className="text-overlay">Clothing</div>
				</div>
				<div
					className="img-container card-shadow-dark"
					onClick={() => navigateHandler(LIFESTYLE)}
				>
					<img
						src="https://d1x7zurbps6occ.cloudfront.net/product/large/871009-225484.jpg"
						className="img-responsive"
						alt="product image"
					/>
					<div className="text-overlay">Life Style</div>
				</div>
				<div
					className="img-container card-shadow-dark"
					onClick={() => navigateHandler(STATIONERY)}
				>
					<img
						src="https://i.etsystatic.com/23080979/c/2521/2003/301/474/il/50220a/3763412059/il_340x270.3763412059_nl2h.jpg"
						className="img-responsive"
						alt="product image"
					/>
					<div className="text-overlay">Stationery</div>
				</div>
				<div
					className="img-container card-shadow-dark"
					onClick={() => navigateHandler(WALLART)}
				>
					<img
						src="https://d1x7zurbps6occ.cloudfront.net/product/large/1064522-316716.jpg"
						className="img-responsive"
						alt="product image"
					/>
					<div className="text-overlay">Wall Art</div>
				</div>
			</div>
			<main className="container-banner padding-s gap-l holo-bg">
				<div className="hero-image">
					<img src={IMAGES.hero} className="img-responsive" alt="hero image" />
				</div>
				<div className="flex-column gap-s">
					<p className="text-xl text-heading txt-high-light">ASIMOV∞</p>
					<p className="text-xl">
						Products spanning multiple verses just a click away
					</p>

					<Link to="/ProductListing">
						<button className="btn btn-primary-solid btn-lg">
							EXPLORE NOW
						</button>
					</Link>
				</div>
			</main>
		</div>
	);
};
