export const getRatedProducts = (products, rating) => {
	return products.filter((item) => item.rating >= rating);
};
