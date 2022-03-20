import "./Home.css";
import { IMAGES } from "../../assets/index";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div className="main-container main-container-gutter">
			<div className="catergory-container gap-l grid-6-column">
				<div className="img-container card-shadow-dark">
					<img
						src={IMAGES.duneBookCover}
						className="img-responsive"
						alt="product image"
					/>
					<div className="text-overlay">Accessories</div>
				</div>
				<div className="img-container card-shadow-dark">
					<img
						src={IMAGES.duneBookCover}
						className="img-responsive"
						alt="product image"
					/>
					<div className="text-overlay">Books</div>
				</div>
				<div className="img-container card-shadow-dark">
					<img
						src={IMAGES.duneBookCover}
						className="img-responsive"
						alt="product image"
					/>
					<div className="text-overlay">Clothing</div>
				</div>
				<div className="img-container card-shadow-dark">
					<img
						src={IMAGES.duneBookCover}
						className="img-responsive"
						alt="product image"
					/>
					<div className="text-overlay">Life Style</div>
				</div>
				<div className="img-container card-shadow-dark">
					<img
						src={IMAGES.duneBookCover}
						className="img-responsive"
						alt="product image"
					/>
					<div className="text-overlay">Stationery</div>
				</div>
				<div className="img-container card-shadow-dark">
					<img
						src={IMAGES.duneBookCover}
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
			<div className="collection-container gap-l">
				<div className="img-container card-shadow-dark">
					<img
						src="https://picsum.photos/1200/300"
						className="img-responsive"
						alt="product image"
					/>
					<div className="text-overlay">Clearance Sale</div>
				</div>
				<div className="img-container card-shadow-dark">
					<img
						src="https://picsum.photos/1200/300"
						className="img-responsive"
						alt="product image"
					/>
					<div className="text-overlay">Just In</div>
				</div>
			</div>
		</div>
	);
};
