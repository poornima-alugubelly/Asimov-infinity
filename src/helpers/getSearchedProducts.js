/**
 * Utility function to get the products search by the user
 *
 * @param {array} products - List of All Products
 * @param {string} userInput - Input entered by the user in the search bar
 * @returns {array} - an array of searched products
 */

export const getSearchedProducts = (products, userInput) => {
	const re = new RegExp(`^${userInput}`, "i");
	const reName = new RegExp(`${userInput}`, "i");

	let newProducts = [];

	newProducts.push(...products.filter((product) => re.test(product.category)));
	newProducts.push(
		...products.filter(
			(product) => reName.test(product.name) && !newProducts.includes(product)
		)
	);

	return newProducts;
};
