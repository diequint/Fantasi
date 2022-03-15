import {Home} from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<Routes>
            <Route exact path="/" element={<Home/>}/>
        </Routes>
	);
}

export default App;
