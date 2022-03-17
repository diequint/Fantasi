import styles from "./Err404.module.css";
import { Link } from "react-router-dom";

export function Err404(){
	return(<main className={styles.Err404}>
		<h2>Error 404</h2>
		<p>
			Ups, página no encontrada <span role="img" aria-label='Sad face'>😢</span><br></br><br></br>
			<Link to="/" className="blue_btn">Volver a inicio</Link>
		</p>
	</main>);
}