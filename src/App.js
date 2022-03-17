import {Home} from "./pages/Home";
import {Designs} from "./pages/Designs";
import { Err404 } from "./pages/Err404";
import { Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<Routes>
            <Route exact path="/" element={<Home/>}/>
			<Route exact path="/designs" element={<Designs/>}/>
			<Route path="*" element={<Err404/>}/>
        </Routes>
	);
}

export default App;
