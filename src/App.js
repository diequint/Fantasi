import { Home } from "./pages/Home";
import { Designs } from "./pages/Designs";
import { DesignDetails } from "./pages/Details";
import { Editor, EmptyEditor } from "./pages/Editor";
import { Access } from "./pages/Access";
import { About } from "./pages/About";
import { Err404 } from "./pages/Err404";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
            <Route exact path="/" element={<Home/>}/>
			<Route exact path="/designs" element={<Designs/>}/>
			<Route exact path="/designs/:designId" element={<DesignDetails/>}/>
			<Route exact path="/editor/:designId" element={<Editor/>}/>
            <Route exact path="/editor" element={<EmptyEditor/>}/>
			<Route exact path="/access" element={<Access/>}/>
			<Route exact path="/about" element={<About/>}/>
			<Route path="*" element={<Err404/>}/>
        </Routes>
	);
}

export default App;
