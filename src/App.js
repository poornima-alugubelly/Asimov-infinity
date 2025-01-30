import "./App.css";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { NavRoutes } from "./routes/NavRoutes.jsx";
import { ToastContainer } from "react-toastify";
import { Footer } from "./components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import { AddressModal } from "./pages/UserProfile/Addresses/AddressModal.jsx";
import { ScrollToTopBtn } from "./components/ScrollToTopBtn";
import { ScrollToTop } from "./components/ScrollToTop";
import { CompareProvider } from "./context/CompareContext";

function App() {
	return (
		<div className="App">
			<div className="content">
				<CompareProvider>
					<ToastContainer
						theme="colored"
						autoClose={1000}
						position="bottom-left"
					/>

					<NavBar />
					<AddressModal />
					<NavRoutes />
					<ScrollToTop />
					<ScrollToTopBtn />
				</CompareProvider>
			</div>

			<Footer />
		</div>
	);
}

export default App;
