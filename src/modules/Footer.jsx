import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export function Footer() {
	return(<footer className={styles.Footer}>
		<div>
			<ul>
				<h4>Quienes somos</h4>
				<p>Fantasi es un proyecto que pretende darle a parsonas agenas al diseño y la programación sitios web de calidad sin que estas tengan que pagar una fortuna por  ello.
				</p>
				<p>
				Si quieres saber más al respecto, has click <Link to="/about" className={styles.link_footer}>aquí</Link></p>
			</ul>
			<ul>
				<h4>Contacto</h4>
				<p>
					<label for="user">Email</label><br></br>
					<input type="text"></input><br></br>
					<label for="user">Mensaje</label><br></br>
					<textarea rows="2" type="text"></textarea><br></br>
					<input type="submit" value="Enviar"></input>
				</p>
			</ul>
			<ul>
				<h4>Apoyar</h4>
				<p>Al permitir los anuncios dentro ya nos estás apoyando, sin embargo, también puede hacerlo de estas maneras:</p>
				<li>
					<a className={styles.link_footer} target="_blank" rel="noreferrer" href="https://www.paypal.com">Hacer un donativo</a>
				</li>
				<li>
					<a className={styles.link_footer} target="_blank" rel="noreferrer" href="https://www.paypal.com"> Colaborar en Github</a>
				</li>
			</ul>
			<ul className={styles.socialmedia}>
				<h4>Redes</h4>
				<p><span className={styles.copyleft}>&copy;</span> Fantasi 2022</p>
				<li>
				<a target="_blank" rel="noreferrer" href="https://www.facebook.com/fantasi">
					<img src="./resources/facebook.png" alt="FB icon"/></a>
				</li>
				<li>
					<a target="_blank" rel="noreferrer" href="https://www.instagram.com/fantasi">
					<img src="./resources/instagram.png" alt="IG icon"/></a>
				</li>
				<li>
					<a target="_blank" rel="noreferrer" href="https://www.twitter.com/fantasi">
					<img src="./resources/twitter.png" alt="TW icon"/></a>
				</li>
				<li>
					<a target="_blank" rel="noreferrer" href="https://www.youtube.com/c/fantasi">
					<img src="./resources/youtube.png" alt="YT icon"/></a>
				</li>
			</ul>
		</div>
	</footer>);
}