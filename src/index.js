import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductListingProvider } from "./context/ProductListingContext";
import { AuthContextProvider } from "./context/AuthContext";
import { CartProvider } from "./context/cartContext";
// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<AuthContextProvider>
				<CartProvider>
					<ProductListingProvider>
						<App />
					</ProductListingProvider>
				</CartProvider>
			</AuthContextProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
