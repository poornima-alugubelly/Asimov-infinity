/**
 * /**
 *
 * This is a Context Provider for the address state
 *
 * @type - context-provider
 * @return {react-component} - AddressProvider component
 * @export {react-component} - AddressProvider component
 * @export {custom-hook} - useAddress()
 */

import { useState, createContext, useContext } from "react";

const AddressContext = createContext();
const useAddress = () => useContext(AddressContext);

const AddressProvider = ({ children }) => {
	const [addressState, setAddressState] = useState({
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
		<AddressContext.Provider value={{ addressState, setAddressState }}>
			{children}
		</AddressContext.Provider>
	);
};

export { useAddress, AddressProvider };
