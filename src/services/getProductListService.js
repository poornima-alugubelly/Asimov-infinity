import axios from "axios";

export const getProductListService = async () => {
	try {
		const res = await axios.get("/api/products");
		if (res.status === 200) {
			return res.data.products;
		}
	} catch (err) {
		console.log("error", err); // change to error page later
	}
};
