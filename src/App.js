import "./App.css";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { NavRoutes } from "./routes/NavRoutes.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
	return (
		<div className="App">
			<ToastContainer theme="colored" autoClose={1200} />

			<NavBar />

			<NavRoutes />
		</div>
	);
}

export default App;
