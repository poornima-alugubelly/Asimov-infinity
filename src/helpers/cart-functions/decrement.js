const decrement = (cart, product) => {
	if (product.quantity === 1) {
		return cart.filter((item) => item.id === product.item);
	}
	return cart.map((item) =>
		item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
	);
};

export { decrement };
