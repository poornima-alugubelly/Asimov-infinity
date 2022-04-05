import "./App.css";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { NavRoutes } from "./routes/NavRoutes.jsx";
import { ToastContainer } from "react-toastify";
import { Footer } from "./components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import { AddressModal } from "./pages/UserProfile/Addresses/AddressModal.jsx";
function App() {
	return (
		<div className="App">
			<div className="content">
				<ToastContainer theme="colored" autoClose={1200} />

				<NavBar />
				<AddressModal />
				<NavRoutes />
			</div>

			<Footer />
		</div>
	);
}

export default App;
