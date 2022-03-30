import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductListingProvider } from "./context/ProductListingContext";
import { AuthContextProvider } from "./context/AuthContext";
import { UserDataProvider } from "./context/UserDataContext";
// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<AuthContextProvider>
				<UserDataProvider>
					<ProductListingProvider>
						<App />
					</ProductListingProvider>
				</UserDataProvider>
			</AuthContextProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
