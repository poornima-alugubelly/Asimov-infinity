export const getSortedProducts = (products, sortBy) => {
	if (sortBy === "LOW_TO_HIGH")
		return [...products].sort(
			(item1, item2) => item1.discountedPrice - item2.discountedPrice
		);
	if (sortBy === "HIGH_TO_LOW")
		return [...products].sort(
			(item1, item2) => item2.discountedPrice - item1.discountedPrice
		);

	return products;
};
