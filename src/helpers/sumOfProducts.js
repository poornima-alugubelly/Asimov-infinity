export const sumOfProducts = (productArray, type) => {
	if (type === "discount")
		return productArray.reduce(
			(acc, curr) => (acc += curr.discountedPrice * curr.qty),
			0
		);
	if (type === "price")
		return productArray.reduce(
			(acc, curr) => (acc += curr.discountedPrice * curr.qty),
			0
		);
};
