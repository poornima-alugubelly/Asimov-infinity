export const billGenerator = (productArray) => {
	const discountPrimeSum = productArray.reduce(
		(acc, curr) => (acc += ((curr.price * curr.discount) / 100) * curr.qty),
		0
	);
	const priceSum = productArray.reduce(
		(acc, curr) => (acc += curr.price * curr.qty),
		0
	);

	return [priceSum, discountPrimeSum];
};
