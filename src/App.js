import "./App.css";
import { NavBar } from "./components/nav-bar";
import { NavRoutes } from "./routes/NavRoutes";

function App() {
	return (
		<div className="App">
			<NavBar />
			<NavRoutes />
		</div>
	);
}

export default App;
