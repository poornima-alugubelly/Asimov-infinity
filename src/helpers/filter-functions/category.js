const getFliteredProducts = (sortedproducts, clothing, wallart) => {
	const filteredlist = [];
	if (clothing === false && wallart === false) {
		return sortedproducts;
	}
	if (clothing) {
		let newList = sortedproducts.filter(
			(item) => "clothing" === item.category.toLowerCase()
		);

		filteredlist.push(...newList);
	}

	if (wallart) {
		let newList = sortedproducts.filter(
			(item) => "wallart" === item.category.toLowerCase()
		);

		filteredlist.push(...newList);
	}
	console.log("filtered list", filteredlist);
	return filteredlist;
};

export { getFliteredProducts };
