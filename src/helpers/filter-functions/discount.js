const getDiscountedProducts = (products, discount) => {
	if (discount) {
		return products.filter((item) => item.discount >= discount);
	}
	return products;
};

export { getDiscountedProducts };
