import "./CSS/common.css";
import { NavBar } from "./components/NavBar";
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
