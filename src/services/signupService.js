import axios from "axios";

const signupService = async (email, password, firstName, lastName) => {
	const res = await axios.post("/api/auth/signup", {
		email,
		password,
		firstName,
		lastName,
	});
	console.log("sign up", res);
	try {
		if (res.status === 201) {
			return res.data.encodedToken;
		} else {
			throw new Error(res);
		}
	} catch (err) {
		console.log(err); // show page later
	}
};

export { signupService };
