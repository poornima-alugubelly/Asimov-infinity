export const getPricedProducts = (products, price) => {
	return products.filter((item) => item.price <= price);
};
