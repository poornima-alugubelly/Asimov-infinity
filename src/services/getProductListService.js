import axios from "axios";

export const getProductListService = async () => {
	return await axios.get("/api/products");
};
