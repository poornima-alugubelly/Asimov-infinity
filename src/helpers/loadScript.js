/**
 * Utility function to load a script
 *
 *
 * @param {*} src -  Razorpay Script for checkout
 * @returns - returns a promise which on success adds the razor pay script to the app
 */

export const loadScript = async (src) => {
	return new Promise((resolve) => {
		const script = document.createElement("script");
		script.src = src;
		script.onload = () => {
			resolve(true);
		};
		script.onerror = () => {
			resolve(false);
		};
		document.body.appendChild(script);
	});
};
