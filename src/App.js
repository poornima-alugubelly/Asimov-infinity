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
			<ToastContainer theme="colored" autoClose={1200} />

			<NavBar />
			<AddressModal />
			<NavRoutes />
			<Footer />
		</div>
	);
}

export default App;
