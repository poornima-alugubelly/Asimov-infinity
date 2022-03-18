const addToCart = (cart, product) => {
	const productExists = cart.find((item) => item.id === product.id);
	if (productExists) {
		return cart.map((item) =>
			item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
		);
	}
	return [...cart, { ...product, quantity: 1 }];
};

export { addToCart };
