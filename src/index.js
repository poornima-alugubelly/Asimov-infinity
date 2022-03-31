import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductListingProvider } from "./context/ProductListingContext";
import { AuthContextProvider } from "./context/AuthContext";
import { UserDataProvider } from "./context/UserDataContext";
import { GlobalProvider } from "./context/GlobalContext";
// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<AuthContextProvider>
				<UserDataProvider>
					<ProductListingProvider>
						<GlobalProvider>
							<App />
						</GlobalProvider>
					</ProductListingProvider>
				</UserDataProvider>
			</AuthContextProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
