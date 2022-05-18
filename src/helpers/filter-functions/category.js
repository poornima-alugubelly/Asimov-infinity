/**
 * utility function to get the products according to the categories selected by the user
 *
 *
 * @param {array} sortedproducts - an array of  products sort by price
 * @param {array} categories - an array of categories
 * @returns {array}  - return filtered arrayof items based of the categories selected by user
 */

export const getFliteredProducts = (sortedproducts, categories) => {
	const filteredlist = [];

	let count = 0;
	for (let category in categories) {
		if (categories[category]) {
			let newList = sortedproducts.filter(
				(item) => category === item.category.toLowerCase()
			);

			filteredlist.push(...newList);
		} else {
			count++;
		}
	}

	return count === 6 ? sortedproducts : filteredlist;
};
