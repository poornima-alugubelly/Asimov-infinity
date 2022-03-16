import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductListingProvider } from "./context/ProductListingContext";
// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<ProductListingProvider>
			<Router>
				<App />
			</Router>
		</ProductListingProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
