import styles from "./Menu.module.css";

export function Plantilla_Menu(){
	return(<>
		<div className={styles.contenedor}>
			<header>
				<h1 className={styles.h1}>Plantilla Menu</h1>
				<nav className={styles.nav}>
					<ul className={styles.ul}>
						<a id="btn-qr" href=""><li className={styles.li}>QR</li></a>
						<a id="btn-inf" href=""><li className={styles.li}>Información</li></a>
						<a id="btn-menu" href=""><li className={styles.li}>Menú</li></a>
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