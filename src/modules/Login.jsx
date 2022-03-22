import styles from "./Login.module.css";
import {Link} from "react-router-dom";

export function Login() {
	return(<><h2>Hola! Que gusto tenerte aquí</h2>
		<main className={styles.Container}>
		<div>
			<h3>Soy Nuevo</h3>
			<label for="user">Nombre de usuario</label><br></br>
			<input type="text" className="input"></input><br></br>
			<label for="email">Email</label><br></br>
			<input type="text" className="input"></input><br></br>
			<label for="password">Contraseña</label><br></br>
			<input type="password" className="input"></input><br></br>
			<label for="password">Repetir contraseña</label><br></br>
			<input type="password" className="input"></input><br></br><br></br>
			<Link to="/myProfile" className="blue_btn">Registrarme</Link>
		</div>
		<div>
			<h3>Ya estoy registrado</h3>
			<label for="user">Usuario o email</label><br></br>
			<input type="text" className="input"></input><br></br>
			<label for="password">Contraseña</label><br></br>
			<input type="password" className="input"></input><br></br><br></br>
			<Link to="/myProfile" className="blue_btn">Inicia sesión</Link>
			<br></br><br></br><br></br><br></br><br></br>
			<Link to="/forgotPassword">¿Olvidó su contraseña?</Link>
		</div>
		</main>
		<br></br>
	</>);
}