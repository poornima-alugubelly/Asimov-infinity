/**
 *
 * Utlity function to calculate the bill of the products in cart
 *
 * @param {array} productArray - list of products present in the cart
 * @returns {array} - array with values priceSum - sum of products price ,
 *                 discountPrimeSum - sum of discounted price
 */

export const billGenerator = (productArray) => {
	const discountPriceSum = productArray.reduce(
		(acc, curr) => (acc += ((curr.price * curr.discount) / 100) * curr.qty),
		0
	);
	const priceSum = productArray.reduce(
		(acc, curr) => (acc += curr.price * curr.qty),
		0
	);

	return [priceSum, discountPriceSum];
};
