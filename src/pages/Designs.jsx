import {Grid} from "../modules/Grid";
import { NavMenu } from "../modules/NavMenu";
import { Footer } from "../modules/Footer";

//TODO: Add categories navigation menu, general navigation menu and footer
export function Designs() {
	return(<>
		<NavMenu />
		<Grid />
		<Footer />
	</>);
}