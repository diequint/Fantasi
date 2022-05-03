import styles from './Evento.module.css';

export function Plantilla_Evento() {
	return(<>
		<div className={styles.contenedor}>
			<header>
				<h1 className={styles.h1}>Plantilla Convocatoria</h1>
				<nav className={styles.nav}>
					<ul className={styles.ul}>
						<a id="btn-informacion" className={styles.a} href=""><li className={styles.li}>Evento</li></a>
						<a id="btn-registro" className={styles.a} href=""><li className={styles.li}>Registro</li></a>
						<a id="btn-contacto" className={styles.a} href=""><li className={styles.li}>Contacto</li></a>
					</ul>
				</nav>
			</header>
			<main className={styles.main}>
				Hola
			</main>
			<footer className={styles.footer}>
				Copiraight&copy; Fantasi&#174; 2022 - Todos los derechos reservados
			</footer>
		</div>
	</>);
}