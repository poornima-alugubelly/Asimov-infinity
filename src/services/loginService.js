import axios from "axios";
const loginService = async (email, password) => {
	const res = await axios.post("/api/auth/login", {
		email,
		password,
	});

	try {
		if (res.status === 200) {
			return res.data.encodedToken;
		} else {
			throw new Error(res);
		}
	} catch (err) {
		console.log(err); // change to error page later
	}
};
export { loginService };
