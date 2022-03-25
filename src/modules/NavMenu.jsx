import styles from "./NavMenu.module.css";
import { Link } from "react-router-dom";

export function NavMenu() {
	return(<header className={styles.NavigationMenu}>
		<ul>
			<li><img src="favicon.ico" alt="Fantasi icon"/></li>
			<Link to="/" className={styles.menuItem}>Inicio</Link>
			<Link to="/designs" className={styles.menuItem}>Diseños</Link>
			<Link to="/editor" className={styles.menuItem}>Editor</Link>
			<Link to="/about" className={styles.menuItem}>Aserca de</Link>
			<li></li>
			<Link to="/access" className="blue_btn">Accede</Link>
			
		</ul>
	</header>);
}