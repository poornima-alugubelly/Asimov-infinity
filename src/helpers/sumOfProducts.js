export const sumOfProducts = (productArray, type) => {
	if (type === "discount")
		return productArray.reduce(
			(acc, curr) => (acc += ((curr.price * curr.discount) / 100) * curr.qty),
			0
		);
	if (type === "price")
		return productArray.reduce(
			(acc, curr) => (acc += curr.price * curr.qty),
			0
		);
};
