import { Footer } from "../modules/Footer";
import { NavMenu } from "../modules/NavMenu";
import styles from "./About.module.css";

export function About() {
	return(<>
	<NavMenu/>
	<h2>Gracias por escojer Fantasi</h2>
	<main className={styles.main}>
		<p>Somos un proyecto que busca ofrecer un gratuito de calidad a todos nuestros usuarios. Creado con <span id="heart" className={styles.Heart}>❤</span> y React para todos ustedes.</p>
		<br/>
		<div className={styles.divisionH}>
			<div className={styles.leftCont}>
				<p>Si te gusta mucho todo esto y quieres invitarnos unos tacos puedes hacerlo <a target="_blank" rel="noreferrer" href="https://www.paypal.com">aquí</a> </p>
				<p>Si no tienes dinero no te preocupes, con usarme y compartirme ya me estas ayudando, siempre y cuando no tengas un bloqueador de anuncios</p>
				<p>Si eres programador o diseñador, puedes contribuir directamente al código <a target="_blank" rel="noreferrer" href="https://www.github.com/diequint/Fantasi">aquí</a></p>
			</div>
			<div className={styles.rightCont}>
				<img className={styles.image} src="./resources/taco.png" alt="Taco"/>
			</div>
		</div>
		<br></br>
	</main>
	<Footer/>
	</>);
}