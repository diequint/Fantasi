import styles from "./MyProfile.module.css";
import {Link} from "react-router-dom";

export function MyProfile() {
	return(<><h2>Hola, $usuario</h2>
		<main className={styles.container}>
		<div className={styles.leftCont}>
			<h3>Actualiza tus datos</h3>
			<label for="user">Nombre de usuario</label><br></br>
			<input type="text" className="input"></input><br></br>
			<label for="user">Email</label><br></br>
			<input type="text" className="input"></input><br></br>
			<label for="user">Contraseña</label><br></br>
			<input type="passsword" className="input"></input><br></br>
			<label for="user">Repita su nueva contraseña</label><br></br>
			<input type="password"className="input"></input><br></br><br></br>
			<Link to="/access" className="blue_btn">Actualizar</Link><br></br><br></br>
			<input type="checkbox"></input>
			<label>Me gustaría recibir emails<br></br>de Fantasi con novedades
			</label>
		</div>
		<div className={styles.rightCont}>
			<h3>Mis proyectos</h3>
			<ul className={styles.proyectCard}>
				<li>
					<img src="https://thiscatdoesnotexist.com/" alt="No hay gatitos :c"/>
					<p>Gatitos 1</p>
					<Link to="/editor/1" className="blue_btn">Abrir</Link>
					<Link to="/editor/1" className="blue_btn">Duplicar</Link>
					<Link to="/editor/1" className="red_btn">Eliminar</Link>
				</li>
				<li>
					<img src="https://thiscatdoesnotexist.com/" alt="No hay gatitos :c"/>
					<p>Gatitos 2</p>
					<Link to="/editor/1" className="blue_btn">Abrir</Link>
					<Link to="/editor/1" className="blue_btn">Duplicar</Link>
					<Link to="/editor/1" className="red_btn">Eliminar</Link>
				</li>
				<li>
					<img src="https://thiscatdoesnotexist.com/" alt="No hay gatitos :c"/>
					<p>Gatitos 3</p>
					<Link to="/editor/1" className="blue_btn">Abrir</Link>
					<Link to="/editor/1" className="blue_btn">Duplicar</Link>
					<Link to="/editor/1" className="red_btn">Eliminar</Link>
				</li>
			</ul>
		</div>
		</main>
		<br></br>
	</>);
}