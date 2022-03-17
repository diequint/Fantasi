import {Home} from "./pages/Home";
import {Grid} from "./modules/Grid";
import { Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<Routes>
            <Route exact path="/" element={<Grid/>}/>
        </Routes>
	);
}

export default App;
