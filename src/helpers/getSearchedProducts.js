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
