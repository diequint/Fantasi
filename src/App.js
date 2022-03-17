import { Home } from "./pages/Home";
import { Designs } from "./pages/Designs";
import { DesignDetails } from "./pages/Details";
import { Err404 } from "./pages/Err404";
import { Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<Routes>
            <Route exact path="/" element={<Home/>}/>
			<Route exact path="/designs" element={<Designs/>}/>
			<Route exact path="/designs/:designId" element={<DesignDetails/>}/>
			<Route path="*" element={<Err404/>}/>
        </Routes>
	);
}

export default App;
