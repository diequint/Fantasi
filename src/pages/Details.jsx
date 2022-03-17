import designs from "../modules/designs.json";
import styles from "./Details.module.css";
import { Link } from "react-router-dom";

export function DesignDetails() {
	//Get the url name and look for the last slash, after that there is the designID
	var url = window.location.pathname;
	var i = url.lastIndexOf("/");
	url = (url.slice(i+1))-1;

	return(<main className={styles.Container}>
		<img className={styles.column} src="https://thiscatdoesnotexist.com/" alt={designs[url].name}></img>
		<div className={styles.column}>
			<p><strong>Título:</strong> {designs[url].name}<br></br>
				<strong>Categoría:</strong> {designs[url].category}<br></br>
				<strong>Popularidad:</strong> {designs[url].popularity} <button id="heart" className={styles.Heart}>❤</button>
			</p>
			<p>
				<br></br><strong>Ponle nombre a tu proyecto</strong><br></br>
				<input type="text" className="input"></input><br></br>
			</p>
			<Link to={"/editor/"+(url+1)} className="blue_btn">Usar este diseño</Link>
			<br></br><br></br>
			<Link to={"/designs"} className="white_btn">Volver a diseños</Link>
		</div>
	</main>);
}