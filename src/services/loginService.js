import axios from "axios";
export const loginService = async (email, password) => {
	console.log("email", email, "password", password);
	try {
		const res = await axios.post("/api/auth/login", {
			email,
			password,
		});
		if (res.status === 200) {
			return res.data.encodedToken;
		}
	} catch (err) {
		console.log("error", err); // change to error page later
	}
};
