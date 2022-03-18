import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductListingProvider } from "./context/ProductListingContext";
import { AuthContextProvider } from "./context/AuthContext";
import { GlobalProvider } from "./context/GlobalContext";
// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<AuthContextProvider>
			<GlobalProvider>
				<ProductListingProvider>
					<Router>
						<App />
					</Router>
				</ProductListingProvider>
			</GlobalProvider>
		</AuthContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
