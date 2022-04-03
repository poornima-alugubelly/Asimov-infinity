import { useState, createContext, useContext } from "react";

const GlobalContext = createContext();
const useGlobal = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
	const [globalState, setGlobalState] = useState({
		isAddressModalOpen: false,
		currAddress: {
			name: "",
			street: "",
			city: "",
			state: "",
			country: "",
			pincode: "",
			phone: "",
		},
	});
	return (
		<GlobalContext.Provider value={{ globalState, setGlobalState }}>
			{children}
		</GlobalContext.Provider>
	);
};

export { useGlobal, GlobalProvider };
