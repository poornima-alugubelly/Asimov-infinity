import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductListingProvider } from "./context/ProductListingContext";
import { AuthContextProvider } from "./context/AuthContext";
import { CartProvider } from "./context/cartContext";
import { WishlistProvider } from "./context/WishlistContext";
// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ProductListingProvider>
				<AuthContextProvider>
					<WishlistProvider>
						<CartProvider>
							<App />
						</CartProvider>
					</WishlistProvider>
				</AuthContextProvider>
			</ProductListingProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
