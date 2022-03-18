import { useReducer, createContext, useContext, useEffect } from "react";
import { globalReducer } from "../reducers/globalReducer";
import { getCartService } from "../services/getCartService";
import { useAuth } from "./AuthContext";
import { actionTypes } from "../reducers/actionTypes";
const globalContext = createContext();
const useGlobal = () => useContext(globalContext);
const GlobalProvider = ({ children }) => {
	const [globalState, globalDispatch] = useReducer(globalReducer, {
		cart: [{ hmm: "ok" }],
	});
	const { SET_CART } = actionTypes;
	const { auth } = useAuth();
	useEffect(
		() =>
			(async () => {
				const cart = await getCartService(auth.token);
				globalDispatch({ type: SET_CART, payload: cart });
			})(),
		[]
	);
	console.log("cart", ...globalState.cart);
	return (
		<globalContext.Provider value={{ globalState, globalDispatch }}>
			{children}
		</globalContext.Provider>
	);
};

export { GlobalProvider, useGlobal };
