import styles from "./Editor.module.css";
import {Link} from "react-router-dom";
import { NavMenu } from "../modules/NavMenu";
import { PageEditor } from "../modules/PageEditor";
import { Footer } from "../modules/Footer";

//TODO: Generate modules to customize the design chosen
export function Editor() {
	return(<>
		<NavMenu />
		<PageEditor />
		<Footer />
	</>);
}

export function EmptyEditor(){
	return(<>
	<NavMenu />
	<main className={styles.empty}>
		<h3>Primero selecciona un diseño</h3>
		<p>
			Estamos seguros que encontrarás el ideal<br></br><br></br>
			<Link to="/designs" className="blue_btn">Seleccionar desde diseños</Link>
			<Link to="/access" className="blue_btn">Seleccionar desde mi perfil</Link>
		</p>
		<br></br>
		<h3>¿No sabes usar el editor?</h3>
		<p>No te preocupes, solo te tomará unos minutos aprenderlo a usar</p>
		<img src="./resources/visual-editor.png" alt="Screenshot of editor"></img>
		<ul className="division-3">
			<li>
				<strong>Herramientas</strong><br></br>
				Inserta texto, botones, vínculos, imagenes y mucho más.
			</li>
			<li></li>
			<li>
				<strong>Previsualización</strong><br></br>
				Ve en tiempo real los cambios que has hecho en tu sitio.
			</li>
			<li></li>
			<li>
			<strong>Propiedades</strong><br></br>
				Selecciona un elemento y cambia su tamaño, color, etc. 
			</li>
			<li></li>
		</ul>
		<br></br>
		<h3>¿Sigues con dudas?</h3>
		<p>Mira este sencillo tutorial</p>
	</main>
	<Footer />
	</>);
}