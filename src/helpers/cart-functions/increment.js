const increment = (cart, product) => {
	return cart.map((item) =>
		item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
	);
};

export { increment };
