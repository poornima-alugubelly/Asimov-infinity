import axios from "axios";

const getProductListService = async () => {
	const res = await axios.get("/api/products");
	try {
		if (res.status === 200) {
			return res.data.products;
		} else {
			throw new Error("try again!");
		}
	} catch (err) {
		console.log("error"); // change to error page later
	}
};

export { getProductListService };
