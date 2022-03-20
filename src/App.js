import "./App.css";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { NavRoutes } from "./routes/NavRoutes.jsx";

function App() {
	return (
		<div className="App">
			<NavBar />
			<NavRoutes />
		</div>
	);
}

export default App;
