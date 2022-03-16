import axios from "axios";

const getProductListService = async () => {
	const res = await axios.get("/api/products");
	if (res.status === 200) {
		return res.data.products;
	} else {
		return false;
	}
};

export { getProductListService };
