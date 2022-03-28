import {Login} from "../modules/Login";
import { MyProfile } from "../modules/MyProfile";
import { NavMenu } from "../modules/NavMenu";
import { Footer } from "../modules/Footer";

//TODO: Mannagemen of access and creation of My profile page
export function Access() {
	return(<>
		<NavMenu />
		<MyProfile />
		<Footer />
	</>);
}