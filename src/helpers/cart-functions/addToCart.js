const addToCart = (cart, product) => {
	const productExists = cart.find((item) => item._id === product._id);
	if (productExists) {
		return cart.map((item) =>
			item._id === product._id ? { ...item, qty: item.qty + 1 } : item
		);
	}
	return [...cart, { ...product, qty: 1 }];
};

export { addToCart };
