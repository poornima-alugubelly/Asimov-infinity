import axios from "axios";

export const signupService = async (email, password, firstName, lastName) => {
	try {
		const res = await axios.post("/api/auth/signup", {
			email,
			password,
			firstName,
			lastName,
		});
		if (res.status === 201) {
			return res.data.encodedToken;
		}
	} catch (err) {
		console.log("error", err); // show page later
	}
};
