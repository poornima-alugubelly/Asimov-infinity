import axios from "axios";

export const getCategoryService = async () => {
	return await axios.get("/api/categories");
};
