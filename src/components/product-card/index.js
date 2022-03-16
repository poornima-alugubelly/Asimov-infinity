const ProductCard = ({ product }) => {
	return (
		<div class="card card-vertical">
			<div class="img-container">
				<img src={product.src} alt="product image" class="img-responsive" />
			</div>
			{console.log("discount", product)}

			<div class="card-content padding-s">
				<div class="card-title">
					<h3> {product.category} </h3>{" "}
					<i className="far fa-heart text-xs btn-icon"></i>
				</div>

				<span class="card-subtitle">{product.name} </span>
				<span class="card-subtitle">{product.rating} </span>

				<div class="flex-row gap-xs">
					<span class="txt-bold"> {product.discountedPrice}</span>
					<span class="txt-crossed-off">RS.{product.price}</span>
					<span class="txt-high-light">{product.discount}%</span>
				</div>
				<div class="card-footer">
					<button class="btn btn-primary-solid">
						<i class="fa-fw fas fa-shopping-cart"> </i>
						<span>Add to Cart</span>
					</button>
				</div>
			</div>
		</div>
	);
};
export { ProductCard };